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
  .addScene('vader:Ma', -2, '妈','mi',-2,'咪','妈咪'，800)
  .addScene('luke:咋哩咋哩~', 800)
  .addScene('vader:妈咪生气快乐！', 800)
  .addScene('luke:谢谢女', -3, '你说啥？ ', 800, '打死你! ', 800)
  .addScene('luke:仙女不喜欢生气', 800)
  .addScene('luke:仙女不需要', -3, '也需要', -3, '最需要爱情', 1000)
  .addScene('vader:跟妈咪异地的第一年，不用伤心', 800)
  .addScene('vader:妈咪拥有异地恋神器', 800)
  .addScene('luke:Woooooooo! ', 600, '嗷呜!', 800)
  .addScene('vader:祝妈咪又老一岁，万寿无疆', 800)
  .addScene('vader:天增岁月茵增寿', 800)
  .addScene('vader:天满乾坤仙满身', 800)
  .addScene('vader:柳叶弯眉樱桃口', 800)
  .addScene('vader:一年更比一年仙', 800)
  .addScene('luke:啊，我吕鹅太好了真没白养', 800)
  .addScene('luke:今当受礼', 800)
  .addScene('luke:临机涕零', 800)
  .addScene('luke:不知所言', 800)
  .addScene('luke:呜咽不语', 800)
  .addScene('luke:Circle之礼', 800)
  .addScene('luke:永世难忘', 800)
  .addScene('luke:我要给Circle买SurfaceBook', -12, '买两个SB以表达喜悦之情，在此立誓！', 1000)
  .addScene('vader:好的＠(￣-￣)＠', 3000)
  .addScene(theater.replay.bind(theater))
