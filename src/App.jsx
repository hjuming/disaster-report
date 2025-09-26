import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { 
  Calendar, 
  MapPin, 
  AlertTriangle, 
  Users, 
  Building, 
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Home,
  FileText,
  BarChart3,
  Image as ImageIcon
} from 'lucide-react'
import './App.css'

// 導入圖片
import image2 from './assets/image_2.jpg'
import image4 from './assets/image_4.jpg'
import image5 from './assets/image_5.jpg'
import image6 from './assets/image_6.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('summary')
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const timelineData = [
    {
      time: "2024年4月",
      event: "花蓮大地震",
      description: "劇烈震動東部山區，導致山坡土石結構鬆動",
      type: "background"
    },
    {
      time: "2025年7月25日",
      event: "薇帕颱風豪雨",
      description: "引發第118林班地大規模邊坡崩塌",
      type: "formation"
    },
    {
      time: "2025年7月26日",
      event: "堰塞湖形成",
      description: "農業部衛星監測確認湖體初具規模，湖面約18公頃",
      type: "formation"
    },
    {
      time: "2025年9月21日",
      event: "黃色警戒",
      description: "林業保育署發布黃色警戒通知",
      type: "warning"
    },
    {
      time: "2025年9月22日",
      event: "紅色警戒",
      description: "升級為紅色警戒，建請強制撤離高風險區居民",
      type: "warning"
    },
    {
      time: "2025年9月23日 14:50",
      event: "開始溢流",
      description: "堰塞湖壩頂開始溢流，災難正式啟動",
      type: "disaster"
    },
    {
      time: "2025年9月23日 15:30",
      event: "橋梁沖斷",
      description: "台9線馬太鞍溪橋完全沖斷，交通中斷",
      type: "disaster"
    },
    {
      time: "2025年9月23日 16:00",
      event: "市區淹水",
      description: "洪水湧入光復鄉市區，水位達半層樓高",
      type: "disaster"
    }
  ]

  const impactData = [
    { category: "人員傷亡", value: "15人罹難、8人失聯", icon: Users },
    { category: "停水戶數", value: "4,300戶", icon: Home },
    { category: "停電戶數", value: "2,600戶", icon: Building },
    { category: "農田受淹", value: "300公頃", icon: MapPin }
  ]

  const sections = [
    { id: 'summary', title: '執行摘要', icon: FileText },
    { id: 'background', title: '災害背景', icon: AlertTriangle },
    { id: 'timeline', title: '事件時間軸', icon: Clock },
    { id: 'impact', title: '傷亡損失', icon: BarChart3 },
    { id: 'government', title: '中央政府角色', icon: Building },
    { id: 'analysis', title: '制度性問題', icon: FileText },
    { id: 'recommendations', title: '專家建議', icon: Users },
    { id: 'images', title: '災情圖片', icon: ImageIcon }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-500">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
              馬太鞍溪堰塞湖溢流災害
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              中央政府角色檢討深度分析
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="destructive" className="text-sm">
                <AlertTriangle className="w-4 h-4 mr-1" />
                重大災害
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                2025年9月23日
              </Badge>
              <Badge variant="outline" className="text-sm">
                <MapPin className="w-4 h-4 mr-1" />
                花蓮光復鄉
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <ScrollArea className="w-full">
            <div className="flex space-x-1 py-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveSection(section.id)}
                  className="whitespace-nowrap flex items-center gap-2"
                >
                  <section.icon className="w-4 h-4" />
                  {section.title}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Executive Summary */}
          {activeSection === 'summary' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  執行摘要
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  2025年9月23日，花蓮馬太鞍溪堰塞湖溢流事件，雖由樺加沙颱風的極端降雨所觸發，然其導致的重大傷亡與財產損失，已遠遠超越一場單純天災的範疇。本報告深入剖析此次事件的全貌，論證其為一場可預見、卻未能有效阻止的人為系統性災難。
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <h4 className="font-semibold text-red-800 mb-2">關鍵發現</h4>
                  <ul className="space-y-2 text-red-700">
                    <li>• 風險評估未能充分考量最壞情境，導致整體應變思維趨於保守</li>
                    <li>• 「垂直避難」指引在傳達上產生歧義，無意間降低了民眾的警戒心</li>
                    <li>• 中央與地方政府間「權責分明，能力失衡」的結構性困境</li>
                    <li>• 災後政治攻訐嚴重侵蝕公眾對政府災害治理能力的信任</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Background */}
          {activeSection === 'background' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  災害簡介與背景
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">堰塞湖形成原因與潛伏風險</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    本次花蓮馬太鞍溪堰塞湖溢流災害的肇因可追溯至更早的自然事件。2024年4月發生於花蓮的大地震劇烈震動東部山區，導致山坡土石結構鬆動，埋下日後大規模崩塌的隱憂。
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">堰塞湖基本數據</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-blue-600 font-medium">湖面面積</span>
                        <p className="text-blue-800">18公頃</p>
                      </div>
                      <div>
                        <span className="text-blue-600 font-medium">壩體高度</span>
                        <p className="text-blue-800">120公尺</p>
                      </div>
                      <div>
                        <span className="text-blue-600 font-medium">蓄水量</span>
                        <p className="text-blue-800">1,400萬立方公尺</p>
                      </div>
                      <div>
                        <span className="text-blue-600 font-medium">預警期</span>
                        <p className="text-blue-800">2個月</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">溢流事件歷程與災害概況</h3>
                  <p className="text-gray-700 leading-relaxed">
                    2025年9月下旬，超強颱風「樺加沙」的外圍環流為東部山區帶來致命豪雨。9月23日當日下午2時50分，堰塞湖壩頂開始溢流，巨量湖水自天然壩體上漫出。16時30分發生第二波更猛烈的溢流，在短短半小時內壩前水位驟降14公尺，相當於約1,540萬噸水體傾瀉而下，最大洪峰流量高達每秒8,800立方公尺，規模之巨已近乎潰壩等級。
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Timeline */}
          {activeSection === 'timeline' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  事件時間軸
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timelineData.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${
                          item.type === 'disaster' ? 'bg-red-500' :
                          item.type === 'warning' ? 'bg-yellow-500' :
                          item.type === 'formation' ? 'bg-blue-500' :
                          'bg-gray-500'
                        }`} />
                        {index < timelineData.length - 1 && (
                          <div className="w-0.5 h-8 bg-gray-300 mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                          <Badge variant={
                            item.type === 'disaster' ? 'destructive' :
                            item.type === 'warning' ? 'default' :
                            'secondary'
                          } className="w-fit">
                            {item.time}
                          </Badge>
                          <h4 className="font-semibold text-gray-900">{item.event}</h4>
                        </div>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Impact */}
          {activeSection === 'impact' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-6 h-6" />
                  傷亡損失與影響
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {impactData.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-8 h-8 text-red-500" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.category}</h4>
                          <p className="text-lg font-bold text-red-600">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">關鍵事實</h4>
                  <p className="text-red-700">
                    幾乎所有罹難者都在事先劃定的強制撤離區內被尋獲，顯示防災體系在最後一哩的疏散措施上徹底失敗。
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">基礎設施損毀</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 台9線馬太鞍溪大型橋梁被沖毀，道路中斷</li>
                    <li>• 光復市區大量住宅商家遭泥水淹沒</li>
                    <li>• 農田受淹面積逾300公頃</li>
                    <li>• 總體損失已超出單純天災範疇</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Government Role */}
          {activeSection === 'government' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-6 h-6" />
                  中央政府的角色與作為
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-gray-50 rounded-lg"
                    onClick={() => toggleSection('monitoring')}
                  >
                    <h3 className="text-lg font-semibold">監測預警部署：科技資源投入與時間線</h3>
                    {expandedSections.monitoring ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {expandedSections.monitoring && (
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-700">
                        馬太鞍溪堰塞湖自形成之初即受到中央政府專業單位的密切關注。農業部林業及自然保育署在7月下旬即動員衛星影像與空拍監測，定期評估湖水水位、壩體結構及下游潛在影響範圍。
                      </p>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">預警時間線</h4>
                        <ul className="space-y-1 text-blue-700 text-sm">
                          <li>• 9月21日：發布黃色警戒通知</li>
                          <li>• 9月22日：升級為紅色警戒</li>
                          <li>• 9月23日：當日7次發出紅色警戒通報</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-gray-50 rounded-lg"
                    onClick={() => toggleSection('technical')}
                  >
                    <h3 className="text-lg font-semibold">技術研判與風險評估</h3>
                    {expandedSections.technical ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {expandedSections.technical && (
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-700">
                        在堰塞湖形成後的第一時間，中央相關單位即面臨一項關鍵抉擇：應對這座「定時炸彈」是採取工程介入，還是以監測預警為主？
                      </p>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2">工程處置評估結果</h4>
                        <p className="text-yellow-700 text-sm">
                          專家會議最終達成共識：工程介入的風險遠大於效益，在當時條件下不可行。最佳策略改為被動應對，即強化監測、完善預警、及早疏散。
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                <div>
                  <div 
                    className="flex items-center justify-between cursor-pointer p-3 bg-gray-50 rounded-lg"
                    onClick={() => toggleSection('evacuation')}
                  >
                    <h3 className="text-lg font-semibold">疏散政策與「垂直避難」指引</h3>
                    {expandedSections.evacuation ? <ChevronUp /> : <ChevronDown />}
                  </div>
                  {expandedSections.evacuation && (
                    <div className="mt-4 space-y-3">
                      <p className="text-gray-700">
                        在緊急疏散階段，一項由中央提出的政策指引——「垂直避難」——成為日後各界檢討的焦點。
                      </p>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-800 mb-2">政策失誤</h4>
                        <p className="text-red-700 text-sm">
                          「垂直避難」的訊息傳達不夠嚴謹清晰，反而造成居民的錯誤解讀，無意間降低了部分民眾的警戒心，讓他們誤以為留在自家二樓也是安全選項。
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Analysis */}
          {activeSection === 'analysis' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  制度性問題與中央責任檢討
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">權責模糊與協調失靈</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    馬太鞍溪事件暴露出台灣整體災害治理體系中，中央與地方權責劃分表面清晰、實則失衡的結構困境。依據《災害防救法》，臺灣採三級防救體制，但在實際執行中出現嚴重斷裂。
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-300 p-2 text-left">關鍵職能</th>
                          <th className="border border-gray-300 p-2 text-left">中央政府</th>
                          <th className="border border-gray-300 p-2 text-left">縣市政府</th>
                          <th className="border border-gray-300 p-2 text-left">鄉鎮公所</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">危害監測</td>
                          <td className="border border-gray-300 p-2">主要責任</td>
                          <td className="border border-gray-300 p-2">協助、資訊接收</td>
                          <td className="border border-gray-300 p-2">資訊接收</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">風險評估</td>
                          <td className="border border-gray-300 p-2">主要責任</td>
                          <td className="border border-gray-300 p-2">參與</td>
                          <td className="border border-gray-300 p-2">參與</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">疏散執行</td>
                          <td className="border border-gray-300 p-2">支援</td>
                          <td className="border border-gray-300 p-2">督導</td>
                          <td className="border border-gray-300 p-2">主要責任</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">預警資訊與風險溝通的缺口</h3>
                  <p className="text-gray-700 leading-relaxed">
                    本次災害凸顯出台灣防災體系中「產生數據」強但「傳達風險」弱的痼疾。中央政府確實及時發布了各項預警，然而警報傳遞到民眾耳中時卻未能轉化為有效行動。
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">政治責任與災後卸責文化</h3>
                  <p className="text-gray-700 leading-relaxed">
                    災難尚未平息，政治風暴已然捲起。中央與地方政府之間迅速形成兩套針鋒相對的責任敘事，透過媒體在公眾前激烈交鋒，嚴重侵蝕了公眾對政府災害治理能力的信任。
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recommendations */}
          {activeSection === 'recommendations' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  專家觀點與制度建議
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">法制改革方向：強化中央統籌與指揮權</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">修訂《災害防救法》</h4>
                        <p className="text-gray-600 text-sm">明定中央支援義務與介入條件，當地方能力不足時中央必須主動介入支援</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">建立統一指揮體系</h4>
                        <p className="text-gray-600 text-sm">針對跨區域、複雜大型災害，授權中央直接調度指揮地方應變資源</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">強化地方能力：賦權第一線執行與溝通</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">專業化地方防災單位</h4>
                        <p className="text-gray-600 text-sm">補助各縣市成立專責災害管理辦公室，配備專業防災人員</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">常態化聯合演練</h4>
                        <p className="text-gray-600 text-sm">強制每年舉行中央與地方聯合的突發情境疏散演練</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-xl font-semibold mb-3">風險溝通革新：重建公眾信任與避難文化</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">成立國家級風險傳播專責小組</h4>
                        <p className="text-gray-600 text-sm">將複雜災害風險資訊轉化為清晰、有說服力且能引導行動的公共訊息</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">廢除模糊的避難指引</h4>
                        <p className="text-gray-600 text-sm">在極端高危情況下，疏散指令應當單一且不容妥協——即「立刻全面撤離」</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Images */}
          {activeSection === 'images' && (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-6 h-6" />
                  災情圖片
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <img 
                      src={image2} 
                      alt="馬太鞍溪堰塞湖空拍圖" 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      圖1：馬太鞍溪堰塞湖空拍圖，顯示湖體與周圍環境
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <img 
                      src={image4} 
                      alt="光復鄉市區淹水狀況" 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      圖2：光復鄉市區淹水狀況，街道被泥水淹沒
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <img 
                      src={image5} 
                      alt="馬太鞍溪橋被沖毀" 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      圖3：馬太鞍溪橋被洪水沖毀，交通中斷
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <img 
                      src={image6} 
                      alt="災後光復鄉市區景象" 
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 text-center">
                      圖4：災後光復鄉市區景象，房屋被泥水侵襲
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">結語</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              花蓮馬太鞍溪堰塞湖溢流事件是一面鏡子，照出臺灣從法規、體制到政治文化的防災缺陷。
              汲取這次教訓，中央政府責無旁貸地需要推動改革，讓防災體系權責相符、資源下沉、指揮統一、訊息順暢。
              唯有如此，方能將這場痛苦經驗轉化為進步的動力，築起更堅實的國土防護網，迎向更具韌性的未來。
            </p>
          </div>
          
          <Separator className="my-6 bg-gray-700" />
          
          <div className="space-y-4">
            <p className="text-gray-400">邀請您註冊Manus，體驗更高效的AI協作！</p>
            <Button 
              asChild 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <a 
                href="https://manus.im/invitation/AHHDRYYJCP5MK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                註冊Manus
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-sm">
              © 2025 馬太鞍溪堰塞湖溢流災害研究報告 | 由 Manus AI 製作
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
