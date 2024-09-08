import React, { Component } from 'react';
import '../../styles/Doc.css';

export default class Documentation extends Component {
  render() {
    return (
      <div className="documentation-container">
        <div className="main-section">
          <h2>App Documentation</h2>
          <p><strong>Purpose:</strong> This app is designed to provide users with a convenient platform to access and manage their personal finances.</p>
          
          <h3>Automation and Power Tools in Monday.com</h3>
          <p>Here's a step-by-step guide on how to utilize automation and power tools within Monday.com to optimize your workflow and enhance team collaboration. These instructions will walk you through understanding Monday.com’s automation tools and how to set up custom automation for your projects.</p>

          <h3>Step-by-Step Guide:</h3>
          <ul>
            <li><strong>Step 1:</strong> Understanding Automations in Monday.com</li>
            <li><strong>Step 2:</strong> Accessing Automations</li>
            <li><strong>Step 3:</strong> Adding Pre-Built Automation Recipes</li>
            <li><strong>Step 4:</strong> Creating Custom Automations</li>
            <li><strong>Step 5:</strong> Managing Automations</li>
            <li><strong>Step 6:</strong> Power Tools in Monday.com</li>
            <li><strong>Step 7:</strong> Using Integrations</li>
            <li><strong>Step 8:</strong> Practical Example - Automating Task Notifications</li>
            <li><strong>Step 9:</strong> Using Automation Logs</li>
            <li><strong>Step 10:</strong> Reviewing and Optimizing Automation</li>
          </ul>
        </div>
        <div className="sidebar-section">
          <h3>Additional Resources</h3>
          <p>Check out our <a href="#user-guide">User Guide</a> and <a href="#faq">FAQ</a> for more information on how to use the app.</p>
          <h3>Contact Email Support</h3>
          <p>If you encounter any bugs or issues while using the app, feel free to reach out to our support team:</p>
          <p><strong>Email:</strong> <a href="mailto:support@company.com">support@company.com</a></p>

          <h3>Request New Features</h3>
          <p>Have ideas or suggestions for new features? We'd love to hear from you! Send us an email to suggest improvements:</p>
          <p><strong>Email:</strong> <a href="mailto:features@company.com">features@company.com</a></p>
        </div>
      </div>
    );
  }
}
