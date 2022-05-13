## 运行时长   
## [SurgePro](https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/SurgePro.js)
   ```bash
   [Script]
   SurgePro_ReloadProfile = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/SurgePro.js,argument=icon=crown.fill&color=#f6c970
   [Panel]
   #启动时长
   SurgePro_ReloadProfile = script-name=SurgePro_ReloadProfile, title="启动时长", content="请刷新", update-interval=1
   ```

## 网络详情（二选一）
## [Net-info-panel](https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/Net-info-panel.js)

   ```bash
   [Script]
   net-info-panel = script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/Net-info-panel.js,type=generic,script-update-interval=0
   [Panel]
   #网络详情
   net-info-panel=title="网络状态",content="请刷新",style=info,script-name=net-info-panel
   ```
## [NetInfoPanel.js](https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/NetInfoPanel.js)
   ```bash
   [Script]
   内外网IP = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/NetInfoPanel.js,script-update-interval=0
   [Panel]
   ️网络详情 = style=info,script-name=net-info-panel,update-interval=1
   ```
## 奈飞检测 （二选一，注意更换`script-path`后路径）
## [Nf-Check-panel.js](https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/Nf-Check-panel.js)
## [NfCheck.js](https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/NfCheck.js)
   ```bash
   [Script]
   nf_check = type=generic,timeout=5,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/Nf-Check-panel.js
   [Panel]
   #奈飞检测
   nf_check = script-name=nf_check, title="Netflix 解锁检测", content="请刷新", update-interval=36000
   ```
## 流量统计 
## [trafficstatistics.js](https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/trafficstatistics.js)
   ```bash
   [Script]
   TrafficStatistics = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/trafficstatistics.js ,argument=icon=arrow.up.arrow.down.circle&color=#5d84f8
   [Panel]
   #流量统计
   TrafficStatistics = script-name=TrafficStatistics, title="流量统计", content="请刷新", update-interval=1
   ```
## 节假日倒数
## [festival.js](https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/festival.js)
   ```bash
   [Script]
   timecard = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/festival.js
   [Panel]
   #节假日倒数
   timecard = script-name=timecard,update-interval=3600
   ```
## 机场信息
## [Sub-info.js](https://raw.githubusercontent.com/ventusoon/ventus/main/Panel/Sub-info.js)
   ```bash
   [Script]
   Sub_info = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/mieqq/mieqq/master/sub_info_panel.js,script-update-interval=0,argument=url=[URL encode 后的机场节点链接]&reset_day=1&title=AmyInfo&icon=bonjour&color=#007aff

   [Panel]
   Sub_info = script-name=Sub_info,update-interval=600
   ```
