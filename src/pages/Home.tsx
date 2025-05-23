import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Briefcase, GraduationCap, Award, Eye, EyeOff, Terminal, Shield, Database, Cloud, Building2, Calendar, Target, Trophy, Github, Linkedin, Snowflake } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const [showContact, setShowContact] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500/10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Content */}
        <motion.div 
          style={{ y: y1, opacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-white mb-4">
              Ryo Takahashi
            </h1>
            <p className="text-xl text-blue-200 mb-8">エンジニア / データアナリスト</p>
            
            {/* Tech stack icons */}
            <div className="flex justify-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg"
              >
                <Cloud className="w-6 h-6 text-blue-300" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg"
              >
                <Database className="w-6 h-6 text-blue-300" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg"
              >
                <Terminal className="w-6 h-6 text-blue-300" />
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex justify-center space-x-4">
              <motion.a
                href="https://github.com/ryo-81"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                className="text-blue-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-blue-200 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-blue-200 rounded-full mt-2"
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Work Experience */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="flex items-center mb-6">
              <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-3xl font-semibold text-gray-800">職歴</h2>
            </div>

            {/* インテージテクノスフィア */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-50">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-blue-900">株式会社インテージテクノスフィア</h3>
                  <div className="flex items-center mt-2 text-blue-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <p className="text-sm">2023年6月 - 現在</p>
                  </div>
                  <p className="mt-2 text-blue-700 font-medium">エンジニア</p>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="flex items-center text-blue-800">
                        <Target className="w-4 h-4 mr-2" />
                        <p className="font-medium">主な担当業務</p>
                      </div>
                      <ul className="mt-2 ml-6 list-disc text-blue-700 space-y-1">
                        <li>製薬企業向けにデータ基盤(AWS)の構築や開発運用保守</li>
                        <li>データ分析支援</li>
                        <li>各プロジェクトのPL</li>
                        <li>Tableau関連に関するユーザーサポート</li>
                        <li>snowflakeなどへのマイグレーション開発支援</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* クリノヴェイション */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-50">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-blue-900">医療法人社団クリノヴェイション（東京ビジネスクリニック）</h3>
                  <div className="flex items-center mt-2 text-blue-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <p className="text-sm">2020年11月 - 2023年5月</p>
                  </div>
                  <p className="mt-2 text-blue-700 font-medium">システムエンジニア / システムチームリーダー (兼) Mediaチーム</p>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="flex items-center text-blue-800">
                        <Target className="w-4 h-4 mr-2" />
                        <p className="font-medium">主な担当業務</p>
                      </div>
                      <ul className="mt-2 ml-6 list-disc text-blue-700 space-y-1">
                        <li>電子カルテ、予約サイト、クリニック機器設備の運用・管理</li>
                        <li>各プロジェクトのマネジメント</li>
                        <li>システムチームスタッフのマネジメント、新人社員の教育</li>
                        <li>シフト自動作成システムの開発・運用・管理</li>
                        <li>Mediaチーム業務（HP編集、SNS運用、広告デザイン制作）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* シーアイマテックス */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-50">
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-blue-900">シーアイマテックス株式会社</h3>
                  <div className="flex items-center mt-2 text-blue-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <p className="text-sm">2019年4月 - 2020年4月</p>
                  </div>
                  <p className="mt-2 text-blue-700 font-medium">東京土木産業資材部（兼）シールド資材課 営業担当</p>

                  <div className="mt-4 space-y-4">
                    <div>
                      <div className="flex items-center text-blue-800">
                        <Target className="w-4 h-4 mr-2" />
                        <p className="font-medium">主な担当業務</p>
                      </div>
                      <ul className="mt-2 ml-6 list-disc text-blue-700 space-y-1">
                        <li>新規客先、既存顧客への土木資材提案営業（主に雨水貯留槽担当）</li>
                        <li>施工管理（資材発注、業者への施工委託、現場写真管理）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="flex items-center mb-6">
              <Award className="w-5 h-5 text-blue-600 mr-2" />
              <h2 className="text-3xl font-semibold text-gray-800">保有資格</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Terminal, text: 'ITパスポート' },
                { icon: Shield, text: '情報セキュリティマネジメント' },
                { icon: Database, text: '基本情報技術者試験' },
                { icon: Cloud, text: 'AWS Cloud Practitioner' },
                { icon: Snowflake, text: 'snowflake_handsonessentials' },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white p-6 rounded-lg shadow-sm border border-blue-50"
                >
                  <cert.icon className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800">{cert.text}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}