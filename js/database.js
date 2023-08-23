var fso = new ActiveXObject("Scripting.FileSystemObject")

// 创建
function create_db(name){
  fso.CreateTextFile(name, true)
}

// 填写
function write_db(name,msg){
  var f=fso.OpenTextFile(name,1,true)
  f.Write(msg)
  f.Close()
}

// 读取
function read_db(name){
  var f=fso.OpenTextFile(name, 1)
  msg=f.ReadLine()
  f.Close()
  return msg
}
