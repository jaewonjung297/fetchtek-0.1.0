import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  margin: 2em 3em;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container h2 {
    text-align: center;
  }
  .fetchtek {
    color: "#4092FF";
    text-decoration: none;
    font-size: 1.2em;
}
.fetchtek:hover {
    color: cyan;
}
`;


export default function PrivacyPolicy() {
    return (
        <Styles>
            <div className='container'>
                <h2><a href = '/' className='fetchtek' >FetchTek</a> Privacy Policy</h2>
                <p>Last Updated: May 17, 2023
                <br /> <br />
                Welcome to FetchTek ("us", "we", or "our")! This privacy policy outlines how we collect, use, store, and protect your personal data when you visit and use our website at fetchtek.com (the "Website"). We value your privacy and are committed to protecting your personal information. By accessing and using our Website, you agree to the terms outlined in this privacy policy.
                <br /> <br />
                Personal Data Collected
                We may collect the following types of personal data from you:
                Contact information: your full name, email address, mobile phone number, home address, company name, and company address.
                Username and password for your account.
                Any other information you provide to us voluntarily.
                How Personal Data is Collected
                We collect personal data through the following means:
                Sign up form: When you create an account on our Website.
                Contact us forms: When you submit inquiries or communicate with us.
                Purpose of Collecting Personal Data
                We collect and process your personal data for the following purposes:
                To create and manage your account for transacting on our platform.
                To provide you with customer support and respond to your inquiries.
                To communicate with you regarding our services, updates, and promotional offers.
                To comply with legal obligations and enforce our terms of service.
                Legal Basis for Processing Personal Data
                We process your personal data based on the following legal grounds:
                Consent: When you provide us with your personal data voluntarily.
                Contract: To fulfill our contractual obligations to provide services to you.
                How Personal Data is Stored and Protected
                We store and protect your personal data using industry-standard security measures. Your data is securely stored in cloud backups to ensure its confidentiality, integrity, and availability.
                <br /> <br />
                Use of Cookies and Similar Technologies
                We may use cookies and similar technologies to enhance your browsing experience on our Website. These technologies collect information about your usage patterns and preferences. You can manage your cookie preferences through your browser settings.
                <br /> <br />
                Sharing Personal Data with Third Parties
                We may share your personal data with the following third-party service providers:
                <br /> <br />
                HubSpot Inc.: For customer relationship management and marketing purposes.
                Meta Platforms Inc. (Facebook): For marketing and advertising purposes.
                Rights of Users Regarding their Personal Data
                As a user, you have the following rights regarding your personal data:
                Right to access: You can request access to the personal data we hold about you.
                Right to rectification: You can request corrections or updates to your personal data.
                Right to erasure: You can request the deletion of your personal data from our systems.
                Right to data portability: You can request a copy of your personal data in a machine-readable format.
                Data Retention Period
                We retain your personal data for a period of five years for transactional data. After this period, we will securely delete or anonymize your data in accordance with applicable laws and regulations.
                <br /> <br />
                Children's Privacy
                Our Website is not intended for use by individuals under the age of 16. We do not knowingly collect personal data from children. If you are a parent or guardian and believe that your child has provided us with personal data, please contact us, and we will promptly delete the information.
                <br /> <br />
                Links to Third-Party Websites
                Our Website may contain links to third-party websites for your convenience. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of those third-party websites before providing any personal information.
                <br /> <br />
                Updates to the Privacy Policy
                We may update this privacy policy periodically to reflect changes in our data practices or legal requirements. We recommend checking this page regularly for any updates. The "Last Updated" date at the top indicates the latest revision of the policy.
                <br /> <br />
                If you have any questions or concerns about our privacy policy or how we handle your personal data, please contact us at fetchtek@gmail.com.
                </p>
            </div>
        </Styles>
    )
}
