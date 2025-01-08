import React, { useState } from 'react';
import Papa from 'papaparse';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, Title, PointElement } from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, Title, PointElement);

function Dashboard() {
  const [posts, setPosts] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const parsedPosts = result.data.map((row) => ({
            post_id: row[0],
            post_type: row[1],
            likes: parseInt(row[2], 10),
            shares: parseInt(row[3], 10),
            comments: parseInt(row[4], 10),
            posted_at: row[5],
          }));
          setPosts(parsedPosts);
        },
        header: false,
      });
    }
  };

  const postTypeCounts = posts.reduce((acc, post) => {
    acc[post.post_type] = (acc[post.post_type] || 0) + 1;
    return acc;
  }, {});

  const postTypeData = {
    labels: Object.keys(postTypeCounts),
    datasets: [
      {
        data: Object.values(postTypeCounts),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const engagementData = {
    labels: posts.map(post => post.post_id),
    datasets: [
      {
        label: 'Likes',
        data: posts.map(post => post.likes),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Shares',
        data: posts.map(post => post.shares),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Comments',
        data: posts.map(post => post.comments),
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  const engagementOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Engagement Metrics by Post',
      },
    },
  };

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(a.posted_at) - new Date(b.posted_at)
  );

  const engagementOverTime = {
    labels: sortedPosts.map((post) => post.posted_at),
    datasets: [
      {
        label: 'Likes',
        data: sortedPosts.map((post) => post.likes),
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'Shares',
        data: sortedPosts.map((post) => post.shares),
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Comments',
        data: sortedPosts.map((post) => post.comments),
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
    ],
  };

  const postTypeEngagement = {
    labels: Object.keys(postTypeCounts),
    datasets: [
      {
        label: 'Likes',
        data: Object.keys(postTypeCounts).map(type =>
          posts.filter(post => post.post_type === type).reduce((sum, post) => sum + post.likes, 0) / postTypeCounts[type]
        ),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Shares',
        data: Object.keys(postTypeCounts).map(type =>
          posts.filter(post => post.post_type === type).reduce((sum, post) => sum + post.shares, 0) / postTypeCounts[type]
        ),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Comments',
        data: Object.keys(postTypeCounts).map(type =>
          posts.filter(post => post.post_type === type).reduce((sum, post) => sum + post.comments, 0) / postTypeCounts[type]
        ),
        backgroundColor: 'rgba(255, 206, 86, 0.5)',
      },
    ],
  };

  const postTypeEngagementOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Average Engagement by Post Type',
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Social Media Analysis Dashboard</h1>

      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Post Type Distribution</h2>
          {posts.length > 0 ? <Pie data={postTypeData} /> : <p>No data available</p>}
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Engagement Metrics</h2>
          {posts.length > 0 ? <Bar options={engagementOptions} data={engagementData} /> : <p>No data available</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Engagement Over Time</h2>
          {posts.length > 0 ? <Line data={engagementOverTime} /> : <p>No data available</p>}
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Post Type Engagement Breakdown</h2>
          {posts.length > 0 ? <Bar options={postTypeEngagementOptions} data={postTypeEngagement} /> : <p>No data available</p>}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Raw Data</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Post ID</th>
                <th className="px-4 py-2 text-left">Type</th>
                <th className="px-4 py-2 text-left">Likes</th>
                <th className="px-4 py-2 text-left">Shares</th>
                <th className="px-4 py-2 text-left">Comments</th>
                <th className="px-4 py-2 text-left">Posted At</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.post_id} className="border-b">
                  <td className="px-4 py-2">{post.post_id}</td>
                  <td className="px-4 py-2">{post.post_type}</td>
                  <td className="px-4 py-2">{post.likes}</td>
                  <td className="px-4 py-2">{post.shares}</td>
                  <td className="px-4 py-2">{post.comments}</td>
                  <td className="px-4 py-2">{post.posted_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
