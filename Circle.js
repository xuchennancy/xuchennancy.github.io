/*
 * TheaterJS, a typing effect mimicking human behavior.
 *
 * Github repository: 
 * https://github.com/Zhouzi/TheaterJS
 *
 */


var theater = theaterJS({
  "minSpeed": {
    "erase": 40,
    "type": 80
  },
  
  "maxSpeed": {
    "erase": 40,
    "type": 450
  }
})

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
  .addScene('vader:哈喽学长，距离第一次见你快一个月了吧', 600)
  .addScene('vader:还记得分享会上，我向你提问', 400)
  .addScene('vader:但是那会真的不是故意的hh，就是对你没去华为感到好奇而已啦', 1600)
  .addScene('vader:可是好像在你分享完之后，反射弧能绕地球两圈的我开始回想你之前的演讲', 1000)
  .addScene('vader:那会也不知道什么感觉，就是想多听你说些话而已', 1600)
  .addScene('vader:分享会结束后，我想找你要微信，这是在高中后这么多年再一次勇敢吧。可是你好像出去后就再也没回来 ', 800)
  .addScene('vader:我以为我们就真的只有分享会的一面之缘啦', 1600)
  .addScene('vader:没想到的是，第二天的公文培训竟然又见面了', 800)
  .addScene('vader:当我第二天再次见到你时，我觉得自己像中了奖一样，那一刻也没有任何迟疑，也不知道哪里来的勇气就径直向前要了微信', 800)
  .addScene('vader:当然是以咨询工作为由哈哈，Emmm你当时估计也不记得我hhh', 800)
  .addScene('vader:加了微信后，就开始了一句话都要编辑好几次 想好久才发送的漫漫之旅', 1600)
  .addScene('vader:我承认，是有那么一些心动的感觉了。可是要问我喜欢你什么，我的回答是我不知道 ', 800)
  .addScene('vader:但毫无疑问的是，每天会想跟你聊天，想了解你的生活，想见你，想起你就甜甜得但又有一丝小紧张', 2000)
  .addScene('vader:我以为高中以后的我再也不会喜欢谁了，万万没想到啊，在你的研究生尾巴让我遇见了', 2000)
  .addScene('vader:也以为自己再也不会勇敢主动了，可是当遇见那个人时，才发觉自己原来也可以是个勇士 ', 800)
  .addScene('vader:所以便以感谢为由请你吃饭，奈何你是个矜持的boy哈哈哈', 800)
  .addScene('vader:不仅矜持你还业务繁忙，在好不容易约你出来后我们竟只聊了一个小时，失落的我还要强装开心去看你打球，给自己一个拥抱 ', 800)
  .addScene('vader:可是我看你笑的很开心 我也超级开心 ', 800)
  .addScene('vader:而且聊天时我也很自然很开心，这让我更加确定自己的感觉 ', 800)
  .addScene('vader:后来才发现，我们的三观竟也是那么相似 ', 800)
  .addScene('vader:可是这又如何呢，你要毕业了，而且之前也不认识不了解我，我的努力显得有一点无力哦 ', 800)
  .addScene('vader:可是我跟朋友说，我真的没有什么别的想法了，就真的只是想和他多待一会而已 ', 800)
  .addScene('vader:所以才有了第二次坚持不懈约你吃火锅，以及你同样坚持不懈婉拒我', 800)
  .addScene('vader:大概是不想让你觉得我“难磨”，大概是勇气剩的不太多了，又或是想心疼下自己，我没再坚持未实现的火锅之约 ', 800)
  .addScene('vader:满满的热情化为一首凉凉送给自己吧 ', 800)
  .addScene('vader:可是我不管，你说了去重庆或者六盘水请我吃火锅，你可要说话算话啊王同学哈哈哈 ', 800)
  .addScene('vader:其实理性的小我告诉自己我们真的就只是过客而已，但感性的小我还心存侥幸 ', 800)
  .addScene('vader:不过依然感谢遇到你呀，让我的少女心重新被唤起hhh，也让我再次勇敢了一把', 800)
  .addScene('vader:今晚月色真美。谢谢你呀王梓燊同学', 800)
  .addScene('vader:那就祝你毕业快乐，前程似锦。我们，有缘再见。', 800)
  .addScene(theater.replay.bind(theater))
