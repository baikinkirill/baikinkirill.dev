export default function commands(message,dataClass){

    const regex = /([^\s]*)/gm;
    const str = message.toString().toLocaleLowerCase();
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

    if(command[0]==="")
        return [0,0]
    switch (command[0]){
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
            return[-1,command[0]]
            break;
    }
}
