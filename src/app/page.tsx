"use client";
import styles from './BusinessCard.module.scss';
import Image from "next/image";
import { Instagram, MapPin, Phone, Mail, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const BusinessCard = () => (
  <main className={styles.container}>
    <div className={styles.card}>

      {/* Logo */}
      <div className={styles.logoWrapper}>
        <Image src="/logo.png" alt="Active Star Trading Company" width={250} height={160} priority />
      </div>

      {/* Social Media */}
      <div className={styles.socials}>
        <a className={styles.instagram} title='Instagram' href="https://www.instagram.com/activestartrading" target="_blank" rel="noopener noreferrer"><Instagram /></a>
        <a className={styles.location} title='Location' href="https://www.google.com/maps/place/Active+Star+Trading+Est/@31.991476,36.007712,1194m/data=!3m2!1e3!4b1!4m6!3m5!1s0x151b672c0290d9fd:0xc5358510d616cc59!8m2!3d31.991476!4d36.007712!16s%2Fg%2F12qf875pv!5m1!1e1?entry=tts&g_ep=EgoyMDI1MDkwMy4wIPu8ASoASAFQAw%3D%3D&skid=4a577882-f557-4a74-9bf9-df7e2dff7162" target="_blank" rel="noopener noreferrer"><MapPin /></a>
        <a className={styles.whatsapp} title='Whatsapp' href="https://wa.me/962788308553" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>

      {/* Our Catalog */}
      <div className={styles.catalogWrapper}>
        <a className={styles.catalogButton} href="/catalog.pdf" target="_blank" rel="noopener noreferrer">
          Explore Our Catalog
        </a>
      </div>

      {/* Save Contact */}
      <a className={styles.contact} href="active-star.vcf" download >Add To Contact</a>

      {/* Email */}
      <div className={`${styles.item} ${styles.email}`}>
        <div className={styles.icon}><Mail /></div>
        <div className={styles.content}>
          <div className={styles.label}>Email</div>
          <div className={styles.value}><a href="mailto:Info@activestartrading.com">Info@activestartrading.com</a></div>
        </div>
      </div>

      {/* Phone Numbers */}
      <div className={styles.phoneNumbers}>
        <div className={`${styles.item} ${styles.phone}`}>
          <div className={styles.icon}><Phone /></div>
          <div className={styles.content}>
            <div className={styles.label}>Mobile</div>
            <div className={styles.value}><a href="tel:+962788308553">+962 788 308 553</a></div>
          </div>
        </div>
        <div className={`${styles.item} ${styles.office}`}>
          <div className={styles.icon}><Phone /></div>
          <div className={styles.content}>
            <div className={styles.label}>Office</div>
            <div className={styles.value}><a href="tel:+96264881197">+962 6 488 1197</a></div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <a className={styles.reviews} href="https://www.google.com/search?hl=en-JO&gl=jo&q=Active+Star+Trading+Est,+Abu+Al+Qasim+Al+Shabi+St+24,+Amman&ludocid=14210410506595257433&lsig=AB86z5V307rjKXzBYtuxTmgmBzgG#lrd=0x151b672c0290d9fd:0xc5358510d616cc59,3" target="_blank" rel="noopener noreferrer">
        Google Reviews
        <span className={styles.stars}>
          {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="gold" stroke="gold" />)}
        </span>
      </a>
    </div>

    {/* Address */}
    <div className={styles.address}>
      الأردن – عمان – ماركا الشمالية – حي الزهراء – شارع أبو القاسم الشابي – بناية رقم 24
    </div>
  </main>
);

export default BusinessCard;
