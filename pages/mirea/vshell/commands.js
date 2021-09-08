export default function commands(message,dataClass,storage){

    const regex = /([^\s]*)/gm;
    const str = message
    let m;
    let command=[]

    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        m.forEach((match, groupIndex) => {
            if(match!==""){
                command.push(match)
            }
        });
    }
    command[0]=command[0].toString().toLocaleLowerCase();
    if(command.length==0)
        return [0,0]
    switch (command[0]){
        case 'cd':
            if(command[2]==undefined)
                command[2]=""
            command[2]=command[2].toString().replace("/","")
            let bf=ls(storage,dataClass.path)
            if(command[2]==".."){
                let buff=dataClass.path.toString().split("/")
                let bff = ""
                for(var i = 0 ;i<buff.length-2;i++){
                   if(buff[i]!=="")
                       bff=bff+"/"+buff[i]
                }
                if(bff==="")
                    bff="/"
                dataClass.path=bff
                return [1,""]
            }else if(command[2]!==""){
                if(command[2] in bf){
                    if(bf[command[2]]==null){
                        return[-1,command[2],"is not a directory"]
                    }else{
                        dataClass.path=dataClass.path+command[2]+"/"
                    }
                }else{
                    return[-1,command[2],"no such file or directory"]
                }
            }else{

            }
            return[1,""]
            break;
        case 'ls':
            let buff=""
            bf =ls(storage,dataClass.path)
            for (var i in bf)
                if(bf[i]==null)
                    buff=buff+i+" "
                else
                    buff=buff+i+"/ "
            return[1,buff]
            break;

        case 'su':
            dataClass.user=command[2]
            return [1,""]
            break;
        case 'sex':
            dataClass.setPath("/gachi/com")
            dataClass.user="dick"
            return [1,"http://gachi.com"]
        break;
        default:
            return[-1,command[0],"command not found"]
            break;
    }
}

function ls(date,path){
    path=path.replace("/","")
    if(path==="")
        return date

    return ls(date[path.split("/")[0]],path.toString().replace(path.split("/")[0],""))
}
