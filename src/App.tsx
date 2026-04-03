/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { CRM } from './components/CRM';
import { Projects } from './components/Projects';
import { Finance } from './components/Finance';
import { Calculator } from './components/Calculator';
import { Calendar } from './components/Calendar';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'crm': return <CRM />;
      case 'projects': return <Projects />;
      case 'finance': return <Finance />;
      case 'calculator': return <Calculator />;
      case 'calendar': return <Calendar />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
