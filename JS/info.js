var obj = JSON.parse($response.body);
let result = obj.data[0];
let title = result.name + "     UID: " + result.uid ;

let second= '土豪段:' + result.rich_level+' 财富豆:'+result.rich_beans +" 拉黑数: "+result.black_count+'\n'
let detail =  "常用地点： "+ result.usual_location + " 群聊个数：" + result.groups_count;
if(typeof(result.usual_location)!="undefined"){
  let url  = "http://m.idcard.miaochaxun.com/"+result.usual_location.slice(6)+".html";
 detail = detail+"\n"+url;
};
 $notification.post(title,second,detail);
$done({body: JSON.stringify(obj)});

