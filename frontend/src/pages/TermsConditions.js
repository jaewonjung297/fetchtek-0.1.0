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


export default function TermsConditions() {
    return (
        <Styles>
            <div className='container'>
                <h2><a href = '/' className='fetchtek' >FetchTek</a> Terms and Conditions</h2>
                <p>
                These terms of use ("Terms of Use") are a legal agreement between you and FetchTek LLC ("Company," "we," or "us"). These Terms of Use govern your access to and use of www.fetchtek.com, including any content, functionality, and services offered on or through https://www.fetchtek.com (the "Website").
                <br/> <br/>
                Please read the Terms of Use carefully before you start to use the Website. By using the Website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy, found at www.fetchtek.com/privacy, incorporated herein by reference. If you do not want to agree to these Terms of Use or the Privacy Policy, you must not access or use the Website.
                <br/> <br/>
                This Website is offered and available to users who are 18 years of age or older. By using this Website, you represent and warrant that you are of legal age to form a binding contract with the Company and meet all of the foregoing eligibility requirements. If you do not meet all of these requirements, you must not access or use the Website.
                <br/> <br/>
                MODIFICATION OF THESE TERMS OF USE
                We reserve the right to change the terms, conditions, and notices under which the Website is offered, from time to time in our sole discretion. All changes are effective immediately when we post them and apply to all access to and use of the Website thereafter. However, any changes to the dispute resolution provisions set out in the Governing Law and Dispute Resolution and Binding Arbitration sections will not apply to any disputes for which the parties have actual notice on or before the date the change is posted on the Website.
                <br/> <br/>
                Your continued use of the Website following the posting of revised Terms of Use means that you accept and agree to the changes. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.
                <br/> <br/>
                ACCESSING THE WEBSITE AND ACCOUNT SECURITY
                We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period.
                <br/> <br/>
                You are responsible for:
                <br/> <br/>
                Making all arrangements necessary for you to have access to the Website.
                Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.
                To access the Website or some of the resources it offers, you may be asked to provide certain information. It is a condition of your use of the Website that all the information you provide in any submission through the Website is correct, current, and complete. You agree that all information you provide through this Website or otherwise, including but not limited to through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.
                <br/> <br/>
                INTELLECTUAL PROPERTY RIGHTS
                The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by FetchTek LLC, its affiliates, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                <br/> <br/>
                You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Website, except as follows:
                <br/> <br/>
                Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.
                You may store files that are automatically cached by your web browser for display enhancement purposes.
                You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use or for your own legitimate business purposes as a potential or current customer of FetchTek LLC, for your use in understanding and evaluating the desirability and applicability of the products and services offered by FetchTek LLC for you or your business, and not for further reproduction, publication, or distribution.
                If we provide links to social media features with certain content, you may take such actions as are enabled by such features.
                You must not:
                <br/> <br/>
                Modify copies of any materials from this Website.
                Use any illustrations, photographs, video or audio sequences, or any graphics separately from the accompanying text.
                Delete or alter any copyright, trademark, or other proprietary rights notices from copies of materials from this site.
                You must not access or use any part of the Website or any services or materials available through the Website for any commercial gain, for purposes of competing with FetchTek LLC, or as a resource for modeling your business practices. If you print, copy, modify, download, or otherwise use any part of the Website in breach of the Terms of Use, your right to use the Website will stop immediately, and you must, at our option, return or destroy any copies of the materials you have made. No right, title, or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by FetchTek LLC. Any use of the Website not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark, and other laws.
                </p>
            </div>
        </Styles>
    )
}
