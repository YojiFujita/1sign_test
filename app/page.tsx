'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary-600 flex items-center">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white mr-2">
                  1
                </div>
                <span className="text-gray-900">Sign</span>
              </div>
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* ヒーローセクション */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80')`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="text-6xl sm:text-8xl font-bold text-primary-600 flex items-center">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-primary-600 rounded-2xl flex items-center justify-center text-white mr-4">
                  1
                </div>
                <span className="text-gray-900">Sign</span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              1人の大家と、住む人のための、
              <br />
              マッチングアプリ
            </h1>
            <div className="mt-12">
              <button className="bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg flex items-center mx-auto">
                私たちを知る
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Business 1 Sign セクション */}
      <section id="business" className="py-16 sm:py-24 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase opacity-80">
              Business 1 Sign
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              建築家やリフォーム業者とマッチ
              <br />
              あなたに合った、本当に優れた
              <br />
              インテリアで理想を実現。
            </h2>
          </div>

          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl h-64 sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Modern interior design"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white text-primary-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg flex items-center mx-auto">
              詳細を見る
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 1Sign Cyber Access Port™ セクション */}
      <section id="cyber-access" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              1Sign Cyber Access Port™
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              インテリア マイページとマッチング
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-green-100 rounded-2xl p-8 sm:p-12 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              1Sign Cyber Access Port™とは
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              透明性とビジネス効率化をもたらすシステム。
              <br />
              物理と通過するビジネスにおけるすべての課題を、より広範に解決し、大家と住む人の間のマッチングを実現します。
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <i className="ri-check-line text-primary-600 text-xl mr-3 mt-1"></i>
                <span>マッチングシステム</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-primary-600 text-xl mr-3 mt-1"></i>
                <span>デジタルツイン</span>
              </li>
              <li className="flex items-start">
                <i className="ri-check-line text-primary-600 text-xl mr-3 mt-1"></i>
                <span>シングルサインオン</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ri-smartphone-line', title: 'スマートロック', desc: 'デジタル鍵管理' },
              { icon: 'ri-calendar-line', title: '予約管理', desc: '効率的な予約システム' },
              { icon: 'ri-user-line', title: '入居者管理', desc: '簡単な管理' },
              { icon: 'ri-file-list-line', title: '契約管理', desc: 'ペーパーレス' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <i className={`${item.icon} text-4xl text-primary-600 mb-4`}></i>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg flex items-center mx-auto">
              詳細を見る
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* AI × SaaS セクション */}
      <section id="ai-saas" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              AI × SaaS
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              アパート管理機能
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                無線電源を使った特許出願中の独自技術
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                1Sign独自の技術革新により、アパート管理の効率を劇的に向上させます。
                AIとSaaSの融合により、これまでにない管理体験を提供します。
              </p>
              <ul className="space-y-4">
                {[
                  '物件の遠隔管理が可能に',
                  '入居者とのコミュニケーション円滑化',
                  '修繕・メンテナンス自動最適化',
                  'エネルギー使用量の見える化',
                  'セキュリティ強化',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <i className="ri-star-fill text-primary-600 text-xl mr-3 mt-1"></i>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: 'ri-home-wifi-line', title: 'スマートホーム' },
                { icon: 'ri-shield-check-line', title: 'セキュリティ' },
                { icon: 'ri-line-chart-line', title: 'データ分析' },
                { icon: 'ri-customer-service-line', title: 'サポート' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <i className={`${item.icon} text-5xl text-primary-600 mb-4`}></i>
                  <h4 className="font-bold text-gray-900">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg flex items-center mx-auto">
              詳細を見る
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Interior Database セクション */}
      <section id="interior-database" className="py-16 sm:py-24 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase opacity-80">
              Interior Database
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              内装データベース
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              住宅の新しい価値を見出す
              <br />
              RFIDを用いた写真記録で
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: '簡単記録',
                desc: 'RFIDタグで瞬時に写真記録',
                icon: 'ri-camera-line',
              },
              {
                title: 'データベース化',
                desc: '全ての内装情報を一元管理',
                icon: 'ri-database-line',
              },
              {
                title: '価値向上',
                desc: '記録から新たな価値を創出',
                icon: 'ri-line-chart-line',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <i className={`${item.icon} text-4xl mb-4`}></i>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl h-64 sm:h-96">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
              alt="Interior showcase"
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white text-primary-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg flex items-center mx-auto">
              詳細を見る
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 flex items-center">
                <div className="w-8 h-8 bg-white text-primary-600 rounded-lg flex items-center justify-center mr-2">
                  1
                </div>
                <span>Sign</span>
              </div>
              <p className="text-primary-100 leading-relaxed">
                1人の大家と、住む人のための、
                <br />
                マッチングアプリ
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">サービス</h4>
              <ul className="space-y-2 text-primary-100">
                <li>
                  <a href="#business" className="hover:text-white transition-colors">
                    Business 1 Sign
                  </a>
                </li>
                <li>
                  <a href="#cyber-access" className="hover:text-white transition-colors">
                    Cyber Access Port™
                  </a>
                </li>
                <li>
                  <a href="#ai-saas" className="hover:text-white transition-colors">
                    AI × SaaS
                  </a>
                </li>
                <li>
                  <a href="#interior-database" className="hover:text-white transition-colors">
                    Interior Database
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">会社情報</h4>
              <ul className="space-y-2 text-primary-100">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    お問い合わせ
                  </Link>
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  利用規約
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  プライバシーポリシー
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-700 pt-8 text-center text-primary-100">
            <p>&copy; 2024 1Sign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
