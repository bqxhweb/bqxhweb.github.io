var posts=["2024/07/30/about-us/","2024/05/11/我们的论坛/","2024/05/12/八泉学会关于匿名37的看法/","2024/05/19/注册GitHub账号及评论区的使用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };