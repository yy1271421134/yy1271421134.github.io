var posts=["2020/10/12/cssFlex/","2021/03/10/Bubble Sort/","2021/10/16/BootstrapTable/","2020/10/12/erye/","2021/04/12/csstransform/","2021/03/25/exception/","2021/01/27/Javaifswitch/","2021/03/15/java_public4/","2021/01/13/cssweilei/","2021/07/02/javapage/","2021/04/16/javaWeb/","2021/03/15/javastatic/","2021/01/27/Javaxunhuan/","2021/06/29/LinuxAndMysql/","2020/08/11/jquery/","2020/11/05/mysql/","2021/03/16/overriding/","2021/04/21/JavaIO/","2020/10/14/php-1/","2020/11/11/php11-11/","2021/07/28/ssm/","2020/10/11/yige/","2021/08/03/redis/","2020/10/12/在这里/","2021/08/12/Thymeleaf/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };