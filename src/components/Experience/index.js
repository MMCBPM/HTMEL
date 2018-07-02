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
        <h4> Head, Sales & Marketing </h4>
        <ul>
          <li>Introduced and led onboarding and training new account managers for CMS, database and email
        marketing automation software.</li>
          <li>Refined SLAs for customer service support team based on key accounts requirements and
        coached support team on response requirements.</li>
          <li>Created brand voice and refined UI/UX, User Manual and web/marketing content for a SaaS
          cloud based transactional email product launched for the ASEAN region, post MVP.</li>
          <li>Expanded services portfolio for hospitality clients by introduction of additional services.</li>
          <li>Increased project value by $20,000 for banking client by introduction of retainer servicess</li>
          <li>Contribution to new deals worth USD $650,000.</li>
        </ul>
        <h4> Senior Key Account Manager </h4>
        <ul>
          <li>Led development project of loyalty card registration and verification interface for international
          hypermarket chain, mapping business process and stakeholder requirements to technical functions.</li>
          <li>Led email marketing strategy development with B2C clients, advising on content development,
        A/B testing, data analysis and understanding the impact of data on digital marketing strategies.</li>
          <li>Introduced marketing advisory and support for key accounts; regular meetings to support clients'
        needs on best practices for email marketing, responsive web design, targeted and triggered marketing
        communications and compliance to brand voice.</li>

        </ul>


      </Company>

      <Company
        title="Medical Technology"
        start="2013"
        end="2015">
        <h4>Marketing Manager, Asia Pacific</h4>
        <ul>
          <li>Introduced email marketing automation software use and led email marketing campaigns based on best practices.</li>
          <li>Introduced experiential marketing concepts and led application in customer touch points. </li>
          <li>Introduced market segmentation and persona marketing concepts in developing regional marketing and account-based marketing strategies. </li>
          <li>Led and initiated team performance rewards system for Sales Team, supported by Marketing for enhancing Team performance.</li>
          <li>Representative at 11th Malaysia Plan Steering Committee meeting to discuss opportunities in applications of technology across industries for economic development. </li>
          <li>Revised branding direction and developed packaging for software products, marketing
        materials including corporate gifts, and guidelines for events booth displays and conferences.</li>
          <li>Initiated & led specialized training programs in Asia Pac to upskill customers and partners.
          Training materials were adopted by HQ as new benchmark training program.</li>
          <li>Refined proprietary CRM system reporting features for better understanding of marketing performance. </li>
        </ul>

      </Company>

      <Company
        title="Luxury Automotive"
        start="2011"
        end="2013">
        <h4>Marketing Manager</h4>
        <ul>
          <li>Led and initiated customer onboarding and loyalty program based on my own qualitative research
          of previous and current brand car owners.</li>
          <li>Project managed three major car lauching events, 30 major marketing campaigns and up to 60 events.</li>
          <li>Introduced email marketing automation software use and led email marketing campaigns based on best practices.</li>
          <li>Introduced marketing KPI concepts and decision making based on quantitative data.</li>
          <li>Introduced long-term customer retention strategies and programs for better return sales.</li>
        </ul>
      </Company>

      <Company
        title="Food & Beverage Group"
        start="2006"
        end="2011">
        <h4>Group PR & Marketing Manager</h4>
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
        <h4>Sales & Marketing Executive</h4>
        <ul>
          <li>Developed and initiaed email marketing campaigns. Managed online and email lead distribution. </li>
          <li>Designed and developed company Corporate Identity, training and guide materials.</li>
          <li>Top sales executive with largest deal procured at $50,000. Total sales contribution at $125,000.</li>

        </ul>

      </Company>
    </div>
  </div>
);