import React from 'react'
import styles from './styles.module.css';
import Company from './components/Company';

export default () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <h2>Work Experience </h2>
      <Company
        title="Software Consulting"
        start="2015"
        end="2017">
        <h3> Head, Sales &amp; Marketing </h3>
        <ul>
          <li>Introduced and led on-boarding and training of new account managers in CMS, database and 
            email marketing automation software.</li>
          <li>Strategized revamp of corporate website for international hypermarket client; increased value
            of development for client by including monetization features which would amortize website development
            investment.</li>
          <li>Created brand voice and refined UI/UX, User Manual and web/marketing content for a SaaS
          cloud based transactional email product launched for the ASEAN region, post MVP.</li>
          <li>Increased project value by $20,000 for banking client by introduction of retainer servicess</li>
          <li>Contribution to new deals worth USD $650,000.</li>
        </ul>
        <h3> Senior Key Account Manager </h3>
        <ul>
          <li>Led development project for loyalty card registration &amp; verification interface for international
          hypermarket chain. This successfully resolved the customers' issue with fraudulent cards usage &amp; transactions.</li>
          <li>Led email marketing strategy development with B2C clients, advising on content development,
        A/B testing, data analysis and understanding the impact of data on digital marketing strategies. Doubled performance of
        open rates, CTRs for clients. </li>
          <li>Introduced marketing advisory and support for key accounts; regular meetings to support clients'
        needs on best practices for email marketing, responsive web design, targeted &amp; triggered marketing
        communications and compliance to brand voice.</li>

        </ul>


      </Company>

      <Company
        title="Medical Technology"
        start="2013"
        end="2015">
        <h3>Marketing Manager, Asia Pacific</h3>
        <ul>
          <li>Introduced email marketing automation software, experiential marketing practices, 
            market segmentation &amp; persona marketing concepts in regional marketing and 
            account-based marketing.</li>
          <li>Led and initiated team performance rewards system for Sales Team, supported by Marketing for enhancing Team performance.</li>
          <li>Representative at 11th Malaysia Plan Steering Committee meeting to discuss opportunities in applications of technology across industries for economic development. </li>
          <li>Revised branding direction and developed packaging for software products, marketing
        materials including corporate gifts, and guidelines for events booth displays and conferences.</li>
          <li>Initiated &amp; led specialized training programs in Asia Pac to upskill customers and partners.
          Training materials were adopted by HQ as new benchmark training program.</li>
          <li>Refined proprietary CRM system reporting features for better understanding of marketing performance. </li>
        </ul>

      </Company>

      <Company
        title="Luxury Automotive"
        start="2011"
        end="2013">
        <h3>Marketing Manager</h3>
        <ul>
          <li>Project managed three major car lauching events, 30 major marketing campaigns and up to 60 events.</li>
          <li>Introduced marketing KPI concepts and decision making based on quantitative data. Improved social
            media engagement by 200% in first year.</li>
          <li>Improved long-term customer retention by initiating and leading customer onboarding, referral &amp; loyalty programs
            for better return sales.</li>
        </ul>
      </Company>

      <Company
        title="Food &amp; Beverage Group"
        start="2006"
        end="2011">
        <h3>Group PR &amp; Marketing Manager</h3>
        <ul>
          <li>Introduced email marketing automation software use and led email marketing campaigns based on best practices.</li>
          <li>Introduced, developed and led customer loyalty program and partnership marketing with leading lifestyle and beverage brands.</li>
          <li>Led revision of business offerings at specific outlets with poor sales performance.
            Revenue turnover improved in 4months; overall sales performances improved by over 200% in 18 months.</li>
          <li>Led development and operations of catering business as additional revenue stream,
              which contributed up to 25% of total Group income.</li>
          <li>Introduced, developed and led service staff coaching program for improved sales performance.
            Program saved the Company $20,000 in professional fees and sales performance improved up to 18%
            across all outlets after training.</li>

        </ul>
      </Company>

      <Company
        title="Management Consulting"
        start="2004"
        end="2006">
        <h3>Sales &amp; Marketing Executive</h3>
        <ul>
          <li>Developed and initiated email marketing campaigns. Managed online and email lead distribution. </li>
          <li>Designed and developed company Corporate Identity, training and guide materials.</li>
          <li>Top sales executive with largest deal procured at $50,000. Total sales contribution at $125,000.</li>

        </ul>

      </Company>
    </div>
  </div>
);