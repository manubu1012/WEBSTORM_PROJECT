export const mixin = {
    data(){
        return {
            //判断条件
            searchSelectOption3 : reactive([
                { label: "精确匹配", value: 0 },
                { label: "前方一致", value: 1},
                { label: "包含", value: 2},
                { label: "大于", value: 3},
                { label: "小于", value: 4},
                { label: "大于等于", value: 5},
                { label: "小于等于", value: 6},
            ]),
            //判断条件
            searchSelectOperOption : reactive([
                { value: 0, label: '与' },
                { value: 1, label: '或'}
            ]),
            //日期范围
            dateRangeOption : reactive([
                { label: "全部", value: 0 },
                { label: "本周", value: 1 },
                { label: "本月", value: 2},
                { label: "近三月", value: 3 },
                { label: "半年", value: 4},
            ])
        }
    },
    methods:{
        myTableRowClassName({row,rowIndex}){ //斑马线样式
            //把每一行的索引放进row
            row.index = rowIndex;
            if(rowIndex%2 == 1){
                return 'statistics-warning-row';
            }else {
                return '';
            }
        },
    },
}