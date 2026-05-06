"use client";

import React, { useState } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        state: "",
        city: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {

        e.preventDefault();

        setLoading(true);

        try {

            const response = await fetch("/api/contact", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert("Message Sent Successfully!");

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    country: "",
                    state: "",
                    city: "",
                    message: "",
                });

            } else {
                alert("Failed To Send Message");
            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.contactPage}>

            <header className={styles.pageHeader}>
                <div className="container">
                    <h1>Connect With Our Engineers</h1>
                    <p>
                        Inquiries for custom specifications or
                        standard catalog distribution.
                    </p>
                </div>
            </header>

            <section className="section">
                <div className="container">

                    <div className={styles.contactGrid}>

                        <div className={styles.contactInfo}>

                            <h2>Headquarters</h2>

                            <p>Instruments & Controls</p>

                            <p>
                                146, GIDC Industrial Estate,
                                Makarpura
                            </p>

                            <p>
                                Vadodara - 390010,
                                Gujarat, India
                            </p>

                            <div className={styles.contactMethods}>

                                <div className={styles.method}>
                                    <span>📍</span>
                                    Vadodara, India
                                </div>

                                <div className={styles.method}>
                                    <span>📧</span>
                                    instrumentsncontrols@gmail.com
                                </div>

                                <div className={styles.method}>
                                    <span>📧</span>
                                    modynassociates@gmail.com
                                </div>

                                <div className={styles.method}>
                                    <span>📞</span>
                                    +91 9824433982,
                                    +91 98244 32113
                                </div>

                            </div>
                        </div>

                        <div className={`${styles.formBox} glass`}>

                            <form
                                className={styles.form}
                                onSubmit={handleSubmit}
                            >

                                <div className={styles.formRow}>

                                    <div className={styles.formGroup}>
                                        <label>Full Name</label>

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Business Email</label>

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@company.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                </div>

                                <div className={styles.formGroup}>
                                    <label>Phone Number</label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+91 00000 00000"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className={styles.formRow}>

                                    <div className={styles.formGroup}>
                                        <label>Country</label>

                                        <input
                                            type="text"
                                            name="country"
                                            placeholder="India"
                                            required
                                            value={formData.country}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>State</label>

                                        <input
                                            type="text"
                                            name="state"
                                            placeholder="Gujarat"
                                            required
                                            value={formData.state}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>City</label>

                                        <input
                                            type="text"
                                            name="city"
                                            placeholder="Vadodara"
                                            required
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </div>

                                </div>

                                <div className={styles.formGroup}>
                                    <label>Message</label>

                                    <textarea
                                        rows={4}
                                        name="message"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={loading}
                                >
                                    {
                                        loading
                                            ? "Sending..."
                                            : "Send Enquiry"
                                    }
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}