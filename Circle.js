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
    if (theater.getCurrentActor().name === 'shower') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  })

theater
  .addActor('shower', { speed: 0.7, accuracy: 0.6 })
  .addActor('Circle', { speed: 0.7, accuracy: 0.6 })
  .addScene('shower:Circle~', 600)
  .addScene('Circle:shower，morning~', 600)
  .addScene('shower:Circle，',400,'撒~', 600)
  .addScene('Circle:我不撒', 400, -3, 200,'你才撒 ', 600, '! ', 600)
  .addScene('shower:Circle哇', 600)
  .addScene('shower:我给你讲', 600)
  .addScene('shower:我好饿啊，，，', 600)
  .addScene('Circle:＠(￣-￣)＠，', 400,'怪谁', 400, -1, 200,'sei', 600)
  .addScene('shower:怪你，，，，', 400, -5, 200,'我，', 400, '可是真的好饿，，', 600)
  .addScene('Circle:我有钱，', 400, -2, 200,'三块，', 400,'不给你 ＠(￣-￣)＠')
  .addScene('shower:你再也不是我最好', 200, -2, 200,'第一个最好的', 200, -3, 200,'坠好的朋友了，', 400,'哼', 400,'！', 600)
  .addScene('Circle:。。。')

  //.addScene(theater.replay.bind(theater))