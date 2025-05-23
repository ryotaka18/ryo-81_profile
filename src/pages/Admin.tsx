import { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Plus } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  imageUrl: string;
}

export default function Admin() {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      title: 'AWSでのデータ基盤構築について',
      date: '2024-03-15',
      excerpt: 'AWS上でデータ基盤を構築する際の基本的な考え方とベストプラクティスについて解説します。',
      tags: ['AWS', 'データ基盤', 'アーキテクチャ'],
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2944'
    },
    {
      title: 'Snowflakeへのマイグレーション事例',
      date: '2024-03-10',
      excerpt: '既存のデータウェアハウスからSnowflakeへのマイグレーション事例と、その過程で得られた知見を共有します。',
      tags: ['Snowflake', 'マイグレーション', 'データベース'],
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2815'
    }
  ]);

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [editingPost, setEditingPost] = useState<BlogPost>({
    title: '',
    date: '',
    excerpt: '',
    tags: [],
    imageUrl: ''
  });

  const handleEdit = (post: BlogPost) => {
    setSelectedPost(post);
    setEditingPost(post);
  };

  const handleSave = () => {
    if (selectedPost) {
      setPosts(posts.map(post => 
        post.title === selectedPost.title ? editingPost : post
      ));
    } else {
      setPosts([...posts, editingPost]);
    }
    setSelectedPost(null);
    setEditingPost({
      title: '',
      date: '',
      excerpt: '',
      tags: [],
      imageUrl: ''
    });
  };

  const handleNewPost = () => {
    setSelectedPost(null);
    setEditingPost({
      title: '',
      date: new Date().toISOString().split('T')[0],
      excerpt: '',
      tags: [],
      imageUrl: ''
    });
  };

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">ブログ管理</h1>
          <button
            onClick={handleNewPost}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            新規作成
          </button>
        </div>

        {(selectedPost !== null || editingPost.title !== '') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
          >
            <h2 className="text-2xl font-semibold mb-6">
              {selectedPost ? '記事を編集' : '新規記事'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  タイトル
                </label>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  日付
                </label>
                <input
                  type="date"
                  value={editingPost.date}
                  onChange={(e) => setEditingPost({...editingPost, date: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  概要
                </label>
                <textarea
                  value={editingPost.excerpt}
                  onChange={(e) => setEditingPost({...editingPost, excerpt: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  タグ（カンマ区切り）
                </label>
                <input
                  type="text"
                  value={editingPost.tags.join(', ')}
                  onChange={(e) => setEditingPost({...editingPost, tags: e.target.value.split(',').map(tag => tag.trim())})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  画像URL
                </label>
                <input
                  type="text"
                  value={editingPost.imageUrl}
                  onChange={(e) => setEditingPost({...editingPost, imageUrl: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="w-5 h-5 mr-2" />
                保存
              </button>
            </div>
          </motion.div>
        )}

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => handleEdit(post)}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-48 w-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-50 text-blue-600 text-sm px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}