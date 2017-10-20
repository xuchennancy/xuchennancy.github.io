Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @BulletproofCircle
 Sign out
 Unwatch 1
  Star 0  Fork 0 BulletproofCircle/BulletproofCircle.github.io
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights  Settings
Branch: master Find file Copy pathBulletproofCircle.github.io/Circle.js
26910d8  5 hours ago
@BulletproofCircle BulletproofCircle Update Circle.js
1 contributor
RawBlameHistory     
60 lines (55 sloc)  2.3 KB
/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */


var theater = theaterJS()

theater
  .on('type:start, erase:start', function () {
    theater.getCurrentActor().$element.classList.add('actor__content--typing')
  })
  .on('type:end, erase:end', function () {
    theater.getCurrentActor().$element.classList.remove('actor__content--typing')
  })
  .on('type:start, erase:start', function () {
    if (theater.getCurrentActor().name === 'vader') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('vader', { speed: 0.6, accuracy: 0.6 })
  .addActor('luke', { speed: 0.6, accuracy: 0.6 })
  .addScene('vader:我是Circle', 1000)
  .addScene('luke:我是Circle的妈咪', 1000)
  .addScene('luke:安洁莉娜.樱雪羽晗灵.蔷薇泪', 1000)
  .addScene('luke:一位血统纯正的仙女', 1000)
  .addScene('vader:行吧,你喜欢就好', 1000)
  .addScene('vader:Mammy Mammy', 1000)
  .addScene('luke:咋哩嘛', 800)
  .addScene('vader:妈咪生气快乐！', 800)
  .addScene('luke:谢谢我女', -4, '你说啥？ ', 800, '打死你! ', 800)
  .addScene('luke:瞅瞅我是个仙女', 800)
  .addScene('luke:仙女不喜欢生气', 800)
  .addScene('luke:仙女不需要', -3, '也需要', -3, '最需要爱情', 1000)
  .addScene('vader:跟妈咪异地的第一年，不伤心', 800)
  .addScene('vader:妈咪拥有异地恋神器，老开心', 800)
  .addScene('luke:Woooooooo! ', 600, '嗷嗷嗷呜!', 800)
  .addScene('vader:祝妈咪长流水不倒松', 800)
  .addScene('vader:天增岁月茵增寿', 800)
  .addScene('vader:天满乾坤仙满身', 800)
  .addScene('vader:柳叶弯眉樱桃口', 800)
  .addScene('vader:一年更比一年仙', 800)
  .addScene('luke:啊，我吕鹅太好了真没白养', 800)
  .addScene('luke:今当受礼', 800)
  .addScene('luke:临机涕零', 800)
  .addScene('luke:不知所言', 800)
  .addScene('luke:瑟扣之礼', 800)
  .addScene('luke:永世难忘', 800)
  .addScene('luke:我要给我扣买最新SurfaceBook', -12, '啊不', -2, 800, '买俩SB表达喜悦之情，在此立誓！', 1000)
  .addScene('luke:不买不是中国人！', 1000)
  .addScene('vader:好的＠(￣-￣)＠', 3000)
  .addScene(theater.replay.bind(theater))
© 2017 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
