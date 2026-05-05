import React from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
    return (
        <div className={styles.contactPage}>
            <header className={styles.pageHeader}>
                <div className="container">
                    <h1>Connect With Our Engineers</h1>
                    <p>Inquiries for custom specifications or standard catalog distribution.</p>
                </div>
            </header>

            <section className="section">
                <div className="container">
                    <div className={styles.contactGrid}>
                        <div className={styles.contactInfo}>
                            <h2>Headquarters</h2>
                            <p>Instruments & Controls</p>
                            <p>146, GIDC Industrial Estate, Makarpura</p>
                            <p>Vadodara - 390010, Gujarat, India</p>

                            <div className={styles.contactMethods}>
                                <div className={styles.method}>
                                    <span>📍</span> Vadodara, India
                                </div>
                                <div className={styles.method}>
                                    <span>📧</span> instrumentsncontrols@gmail.com
                                </div>
                                <div className={styles.method}>
                                    <span>📧</span> modynassociates@gmail.com
                                </div>
                                <div className={styles.method}>
                                    <span>📞</span> +91 9824433982, +91 98244 32113
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.formBox} glass`}>
                            <form className={styles.form}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Full Name</label>
                                        <input type="text" placeholder="John Doe" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Business Email</label>
                                        <input type="email" placeholder="john@company.com" required />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Phone Number</label>
                                    <input type="tel" placeholder="+91 00000 00000" required />
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label>Country</label>
                                        <input type="text" placeholder="India" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>State</label>
                                        <input type="text" placeholder="Gujarat" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>City</label>
                                        <input type="text" placeholder="Vadodara" required />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Message</label>
                                    <textarea rows={4} placeholder="How can we help you? Please specify product requirements..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Enquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
