import { motion } from 'framer-motion';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

const blogPosts = [
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
];

export default function Blog() {
  return (
    <div className="pt-24 pb-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Blog</h1>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
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
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <div className="space-x-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block bg-blue-50 text-blue-600 text-sm px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-800">
                      <span className="mr-1">続きを読む</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}