******前情提要***

本插件沿用bootstrapTable

使用请下载本站bootstrapTable源码(ctrl+F  搜索  “修改”  即可跳转到源码修改处)



# 1、  likeExcel表格配置

1. 沿用bootstrapTable配置格式
2. 增加了配置参数   ------  type   /  source

>     var selectedPartsColumns = [{
>         field: 'PartCode',
>         title: '配件自编号',
>         align: 'left',
>         width: 120,
>         // checkbox:true,  checkbox，radio等为 true 时 type 必须为btn
>         formatter: function (value, row, index) {
>             return row.tPartCode || row.PartCode || ""
>         },
>         /*
>          * type配置：
>          * autocomplete(下拉表格)
>          * dropdown（下拉选项）
>          * disabled（禁用，获取数据时可以获取内容）
>          * btn（也是禁用，获取数据时不能获取）
>          */
>         type: 'autocomplete',
>         
>         /**
>          * source是搭配type: autocomplete / dropdown 这两个配置的
>          * @param str  输入的关键词（由插件返回）
>          * @param showResult  插件返回的一个函数调用函数即可渲染autocomplete表格或者下拉列表，参数为list格式，[{},{},{}}
>          */
>         source: function (str, showResult) {
>             API.SearchTopStockNow_FN("", str, "", "", function (data) {
>                 showResult(data.rows);
>             })
>         }
>     },
>     {
>         field: 'deleteBtn',  //field 为deleteBtn是删除按钮
>         title: '操作',
>         align: 'center',
>         width: 120,
>         type: "btn",
>         formatter: function (value, row, index) { //返回删除按钮
>             return [
>                 '<a class="btn-delete" href="javascript:void(0)" title="Remove" data-index=' + index + ' data-rowId=' + row.ID + '>删除',
>                 '</a>'
>             ].join('');
>         }
>     }];





## 1.1、  下拉表格配置（沿用bootstrapTable配置格式）

```
/**
 * 下拉表格配置（沿用bootstrapTable配置格式）
 */
var autocompleteColumns = [
    {field: 'tPartCode', title: '配件自编号', align: 'left', width: 123},
    {field: 'tPartName', title: '配件名称', align: 'left', width: 125, sortable: true},
    {field: 'tOE', title: 'OE号', align: 'left', width: 126, sortable: true},
    {field: 'tBrand', title: '品牌', align: 'left', width: 127, sortable: true}
];
```

# 2、  likeExcel初始化

```
/**
 *  likeExcel初始化
 *  $(表格选择器).excelTable({ 配置 })
 */
$("#selectedParts-excel").excelTable({
    columns: selectedPartsColumns,              //likeExcel表格配置（必须）
    autocompleteColumns: autocompleteColumns,   //下拉表格配置（必须）
    data: [],                                   //初始化数据（必须）
    getOnlineData:function (data) {             //data - 表格数据改变后返回的数据list格式
        $("#totalPurchaseAmount").html(data.length);
        var purchasePrice= 0;
        $.each(data,function (i, v) {
            purchasePrice+=parseFloat(v.LastBuyPrice)||0;
        });
        $("#totalPurchasePrice").html(purchasePrice.toFixed(2));
    },
    blankRowQuantity:10                         //空白数据时显示的行数
});
```

# 3、  html配置



```
<table id="selectedParts-excel" unselectable="on" onselectstart="return false;" data-table="excelTable" style="-moz-user-select:none;">
</table>
```
