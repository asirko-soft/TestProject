import React from 'react';
import Layout from '../components/Layout';
import UploadDDL from '../components/UploadDDL';
import GenerationPrompt from '../components/GenerationPrompt';
import ConfigSliders from '../components/ConfigSliders';
import DataPreviewTable from '../components/DataPreviewTable';

const Dashboard = () => {
  return (
    <Layout>
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        <header>
          <h2 className="text-3xl font-bold text-white tracking-tight">Data Generation</h2>
          <p className="text-slate-500 mt-1 text-sm">Design and generate synthetic data for your development and testing needs.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <UploadDDL />
            <GenerationPrompt />
          </div>
          <div className="lg:col-span-1">
            <ConfigSliders />
          </div>
        </div>

        <DataPreviewTable />
      </div>
    </Layout>
  );
};

export default Dashboard;
