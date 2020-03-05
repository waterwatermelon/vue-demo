<template>  
    <div>
    
        <h4>
            使用插件xlsx获取excel文件的数据，将其转成json格式
        </h4>
        <input type="file" @change="guideUpload"/>
    </div>
</template>
<script>
import XLSX from 'xlsx';
export default {
    methods:{
        guideUpload(event){
            console.log('guideload');
            let file = event.target.files[0];
            this.filename = file.name;
            let wb;
            let rabs = false;
            const f = file;
            let reader = new FileReader();
            reader.onload = e => {
                let data = e.target.result;
                console.log(e.target);
                wb = XLSX.read(data,{
                    type:'binary'
                })
                let excelData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                console.log('excelData :', excelData);
            }
            if (rabs) {
                reader.readAsArrayBuffer(f)
            } else {
                reader.readAsBinaryString(f)
            }
        }
    }
}
</script>
