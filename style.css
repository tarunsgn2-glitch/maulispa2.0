/* ============================================================
   MAULI SPA — PATCH FILE (apply after style.css)
   Fixes: More hover | Footer mobile | Membership calc cards |
          Gallery social strip | Responsive improvements
   ============================================================ */

/* ══════════════════════════════════════════════════════════
   FIX 1 — MORE PAGE: Remove blocking overlay, add subtle card hover
   ══════════════════════════════════════════════════════════ */

/* Completely disable the overlay that blocks clicks */
.mfc-hover-overlay {
  display: none !important;
  pointer-events: none !important;
  opacity: 0 !important;
}

/* Subtle card hover: border glow + slight lift (no content blocking) */
.more-feature-card {
  border: 2px solid transparent;
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;
}
.more-feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 24px 70px rgba(0,0,0,.14);
  border-color: var(--gold);
}

/* Ensure all inner elements remain fully clickable */
.more-feature-card * {
  position: relative;
  z-index: 2;
}
.more-feature-card button,
.more-feature-card a,
.more-feature-card select,
.more-feature-card input {
  pointer-events: auto;
}

/* Icon accent on hover via CSS only (no overlay needed) */
.more-feature-card:hover .mfc-icon {
  background: linear-gradient(135deg, var(--gold-dk), var(--gold));
  transform: scale(1.08);
  transition: all .3s ease;
}
.more-feature-card:hover .mfc-icon i {
  color: #0d1a03;
}

/* ══════════════════════════════════════════════════════════
   FIX 2 — FOOTER: Mobile padding & text clipping
   ══════════════════════════════════════════════════════════ */

.footer {
  overflow-x: hidden;
}

.footer-grid.container,
.footer .footer-grid {
  padding-left: 20px;
  padding-right: 20px;
}

@media (max-width: 640px) {
  .footer-grid {
    padding: 40px 18px 30px !important;
    gap: 28px;
  }
  .footer-bottom {
    padding: 14px 0;
  }
  .footer-bottom-inner {
    padding: 0 18px;
    gap: 12px;
  }
  .footer-bio,
  .fc-contact p,
  .footer-links a,
  .trust-badges-footer .tbf {
    font-size: .83rem;
    line-height: 1.65;
  }
  .footer-reg-codes span {
    font-size: .72rem;
  }
  .newsletter-row {
    flex-wrap: wrap;
    gap: 8px;
  }
  .nl-input {
    width: 100%;
    min-width: 0;
  }
  .footer-bottom p {
    font-size: .74rem;
    text-align: center;
  }
  .legal-footer-links {
    justify-content: center;
    gap: 14px;
  }
  .footer-socials {
    gap: 8px;
  }
  .footer-socials a {
    width: 32px;
    height: 32px;
    font-size: .8rem;
  }
}

/* ══════════════════════════════════════════════════════════
   FIX 3 — MEMBERSHIP: Plan cards show actual prices from calculator
   ══════════════════════════════════════════════════════════ */

/* Actual price comparison row inside each plan card */
.plan-actual-price-row {
  background: var(--warm);
  border-radius: 10px;
  padding: 12px 14px;
  margin: 10px 0 14px;
  border: 1.5px solid var(--border);
  transition: all .3s;
}
.plan-card.platinum .plan-actual-price-row {
  background: rgba(255,255,255,.08);
  border-color: rgba(200,169,110,.25);
}
.plan-actual-price-row .par-therapy-name {
  font-size: .7rem;
  color: var(--text3);
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  margin-bottom: 6px;
}
.plan-card.platinum .plan-actual-price-row .par-therapy-name {
  color: rgba(255,255,255,.45);
}
.par-price-line {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.par-normal {
  font-size: .85rem;
  color: var(--text3);
  text-decoration: line-through;
}
.par-member {
  font-family: var(--fd);
  font-size: 1.35rem;
  color: var(--gold-dk);
  font-weight: 700;
}
.plan-card.platinum .par-member {
  color: var(--gold);
}
.par-saving-badge {
  background: linear-gradient(135deg, #22863a, #2ea44f);
  color: #fff;
  font-size: .68rem;
  font-weight: 700;
  padding: 3px 9px;
  border-radius: 20px;
  white-space: nowrap;
}
.plan-card.platinum .par-saving-badge {
  background: linear-gradient(135deg, var(--gold-dk), var(--gold));
  color: #0d1a03;
}

/* Calc selected highlight */
.plan-card.calc-selected {
  box-shadow: 0 0 0 3px var(--gold), 0 20px 60px rgba(200,169,110,.28) !important;
  transform: translateY(-8px) !important;
}
.plan-card.bestseller.calc-selected {
  transform: scale(1.03) translateY(-8px) !important;
}

/* Hide old saving tag (replaced) */
.plan-calc-saving {
  display: none !important;
}

/* ══════════════════════════════════════════════════════════
   FIX 4 — GALLERY: Social strip full width on desktop
   ══════════════════════════════════════════════════════════ */

.social-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  margin-bottom: 40px;
}

.soc-btn {
  flex: 1 1 auto;
  min-width: 120px;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
}

@media (min-width: 769px) {
  .social-strip {
    flex-wrap: nowrap;
  }
  .soc-btn {
    flex: 1 1 0;
    min-width: 0;
  }
}

@media (max-width: 640px) {
  .social-strip {
    gap: 8px;
  }
  .soc-btn {
    flex: 1 1 calc(50% - 4px);
    min-width: 0;
    max-width: calc(50% - 4px);
    padding: 10px 8px;
    font-size: .76rem;
    justify-content: center;
  }
  .soc-btn:last-child:nth-child(odd) {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

/* ══════════════════════════════════════════════════════════
   FIX 5 — Global overflow / responsive safety
   ══════════════════════════════════════════════════════════ */

body, html {
  max-width: 100vw;
  overflow-x: hidden;
}
