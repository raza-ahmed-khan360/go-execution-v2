import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa6";

export function FloatingConsultation() {
  return (
    <Link href="/contact" className="ge-consultation-float" aria-label="Book a free consultation with Go Execution">
      <span className="ge-consultation-float__icon" aria-hidden="true"><FaCalendarCheck /></span>
      <span>
        <small>Ready to grow?</small>
        <strong>Book a FREE Consultation</strong>
      </span>
      <span className="ge-consultation-float__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
