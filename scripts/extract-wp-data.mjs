import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source='D:/goexecution/MAK-solutions/FINAL-Go-Execution-WordPress-Developer-Package/GO-EXECUTION-WORDPRESS-THEME-INSTALL/go-execution';
const token=/\s+|\/\*[\s\S]*?\*\/|\/\/[^\n]*|=>|'(?:\\.|[^'\\])*'|\$?[A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[(),.;]/gm;
class Parser{
 constructor(text){this.t=[...text.matchAll(token)].map(x=>x[0]).filter(x=>!/^\s+$/.test(x)&&!x.startsWith('//')&&!x.startsWith('/*'));this.i=0}
 peek(){return this.t[this.i]}
 pop(expected){const x=this.peek();if(expected&&x!==expected)throw new Error(`Expected ${expected}, got ${x} at ${this.i}`);this.i++;return x}
 value(){const x=this.pop();if(x==='array')return this.array();if(x.startsWith("'"))return x.slice(1,-1).replaceAll("\\'","'").replaceAll('\\\\','\\');if(/^\d/.test(x))return Number(x);if(this.peek()==='('){this.pop('(');const a=[];while(this.peek()!==')'){a.push(this.value());if(this.peek()===',')this.pop(',');else break}this.pop(')');return a[0]??null}return x}
 array(){this.pop('(');const p=[];while(this.peek()!==')'){const first=this.value();if(this.peek()==='=>'){this.pop('=>');p.push([first,this.value()])}else p.push([null,first]);if(this.peek()===',')this.pop(',');else if(this.peek()!==')')throw new Error(`Unexpected ${this.peek()}`)}this.pop(')');return p.some(([k])=>k!==null)?Object.fromEntries(p):p.map(([,v])=>v)}
}
function functionReturn(file,name){const text=fs.readFileSync(file,'utf8');const start=text.indexOf(`function ${name}`);const ret=text.indexOf('return array(',start)+'return '.length;return new Parser(text.slice(ret)).value()}
const services=functionReturn(path.join(source,'inc/content.php'),'go_execution_service_data');
const pricing=functionReturn(path.join(source,'inc/pricing-data.php'),'ge_get_pricing_packages');
function legalPage(name){
 const text=fs.readFileSync(path.join(source,name),'utf8');
 const translated=[...text.matchAll(/esc_html_e\(\s*'((?:\\'|[^'])*)'/g)].map(x=>x[1].replaceAll("\\'","'"));
 const sections=[];
 for(const match of text.matchAll(/<h2[^>]*>[\s\S]*?esc_html_e\(\s*'((?:\\'|[^'])*)'[\s\S]*?<\/h2>/g)){
  const start=match.index+match[0].length;const next=text.indexOf('<h2',start);const block=text.slice(start,next<0?text.length:next);
  const paragraphs=[...block.matchAll(/<p[^>]*>[\s\S]*?esc_html_e\(\s*'((?:\\'|[^'])*)'[\s\S]*?<\/p>/g)].map(x=>x[1].replaceAll("\\'","'"));
  sections.push({title:match[1].replaceAll("\\'","'"),paragraphs});
 }
 const firstTitle=sections[0]?.title;const firstTitleIndex=translated.indexOf(firstTitle);
 return {intro:translated.slice(0,firstTitleIndex),sections};
}
function portfolioData(){
 const text=fs.readFileSync(path.join(source,'inc/content.php'),'utf8');const start=text.indexOf('function go_execution_portfolio_seed_data');const body=text.slice(start);
 return [...body.matchAll(/__\(\s*'((?:\\'|[^'])*)'[\s\S]*?\),\s*'((?:\\'|[^'])*)',\s*'[^']*',\s*\$theme_uri\s*\.\s*'([^']+)'\s*\)/g)].map(x=>({title:x[1].replaceAll("\\'","'"),category:x[2],image:x[3]}));
}
const legal={privacy:legalPage('page-privacy.php'),terms:legalPage('page-terms.php')};const portfolio=portfolioData();
fs.writeFileSync(path.join(root,'lib/wp-content.json'),JSON.stringify({services,pricing,portfolio,legal},null,2));
console.log(`Extracted ${Object.keys(services).length} services, ${Object.keys(pricing).length} pricing groups, ${portfolio.length} portfolio entries and both legal pages`);
