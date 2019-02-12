var selectedPartsColumns = [
    {field: 'StoreName', title: '仓库', align: 'left', width: 132, sortable: true},
    {field: 'PositionName', title: '仓位', align: 'left', width: 133, sortable: true},
    {field: 'PartCode', title: '配件自编号', align: 'left', width: 123, sortable: true,formatter:function(value, row, index){
        return row.tPartCode||row.PartCode||""
    },type: 'autocomplete', source: function (str, showResult) {
        var data = [{"RowNumber":"1","ID":"1375619359410344059","CompanyCode":"1111","StoreName":"配件库","PositionName":"","StoreStart":"0.00","StoreIn":"1.00","StoreOut":"0.00","StoreStock":"1.00","TransferStock":"0.00","AvailableStock":"1.00","FrozenStock":"0.00","CreatedTime":"2019-01-14 11:40:19","tPartCode":"61826","tPartName":"普利司通轮胎（225/50R17)94VER33","tSpec":"","tOE":"225/50R17ER33DZ-FC*","tUnit":"只","tProduceNumber":"","tBrand":"","tCarModel":"","tProduceAddress":"","tAlarmValue":"0.00","tSalePrice":"10.00","tLastBuyPrice":"10.00","tTaxRate":"1.06","tWeightedCost":"9","tCategoryCode":"400","tCategoryName":"400-车身"},{"RowNumber":"2","ID":"1375619350860204761","CompanyCode":"1111","StoreName":"配件库","PositionName":"","StoreStart":"0.00","StoreIn":"1.00","StoreOut":"0.00","StoreStock":"1.00","TransferStock":"0.00","AvailableStock":"1.00","FrozenStock":"0.00","CreatedTime":"2019-01-14 11:40:11","tPartCode":"60677","tPartName":"大头底座-左后门外开手柄(M3)","tSpec":"","tOE":"BSYB59412A","tUnit":"只","tProduceNumber":"","tBrand":"","tCarModel":"","tProduceAddress":"","tAlarmValue":"0.00","tSalePrice":"10.00","tLastBuyPrice":"10.00","tTaxRate":"1.06","tWeightedCost":"9","tCategoryCode":"400","tCategoryName":"400-车身"},{"RowNumber":"3","ID":"1375619340691468401","CompanyCode":"1111","StoreName":"配件库","PositionName":"","StoreStart":"0.00","StoreIn":"1.00","StoreOut":"0.00","StoreStock":"1.00","TransferStock":"0.00","AvailableStock":"1.00","FrozenStock":"0.00","CreatedTime":"2019-01-14 11:40:02","tPartCode":"60709","tPartName":"昂克赛拉脚垫（3D)","tSpec":"","tOE":"CMJP-J36-WE","tUnit":"套","tProduceNumber":"","tBrand":"","tCarModel":"","tProduceAddress":"","tAlarmValue":"0.00","tSalePrice":"10.00","tLastBuyPrice":"10.00","tTaxRate":"1.06","tWeightedCost":"9","tCategoryCode":"400","tCategoryName":"400-车身"},{"RowNumber":"4","ID":"1375619325753465474","CompanyCode":"1111","StoreName":"配件库","PositionName":"","StoreStart":"0.00","StoreIn":"1.00","StoreOut":"0.00","StoreStock":"1.00","TransferStock":"0.00","AvailableStock":"1.00","FrozenStock":"0.00","CreatedTime":"2019-01-14 11:39:52","tPartCode":"60740","tPartName":"轮胎（普利司通175/65/15)","tSpec":"","tOE":"PLST-175/65/15","tUnit":"条","tProduceNumber":"","tBrand":"","tCarModel":"","tProduceAddress":"","tAlarmValue":"0.00","tSalePrice":"10.00","tLastBuyPrice":"22.00","tTaxRate":"1.06","tWeightedCost":"9","tCategoryCode":"400","tCategoryName":"400-车身"},{"RowNumber":"5","ID":"1375619315946462650","CompanyCode":"1111","StoreName":"配件库","PositionName":"","StoreStart":"0.00","StoreIn":"1.00","StoreOut":"0.00","StoreStock":"1.00","TransferStock":"0.00","AvailableStock":"1.00","FrozenStock":"0.00","CreatedTime":"2019-01-14 11:39:43","tPartCode":"60731","tPartName":"右后视镜小总成（CX5 2015-5-28前)","tSpec":"","tOE":"KR116912Z","tUnit":"个","tProduceNumber":"","tBrand":"","tCarModel":"","tProduceAddress":"","tAlarmValue":"0.00","tSalePrice":"10.00","tLastBuyPrice":"11.00","tTaxRate":"1.06","tWeightedCost":"9","tCategoryCode":"400","tCategoryName":"400-车身"},{"RowNumber":"6","ID":"1353664019814713897","CompanyCode":"1111","StoreName":"配件库","PositionName":"","StoreStart":"0.00","StoreIn":"10.00","StoreOut":"2.00","StoreStock":"38.00","TransferStock":"0.00","AvailableStock":"40.00","FrozenStock":"0.00","CreatedTime":"2018-12-18 11:36:04","tPartCode":"63785","tPartName":"机油滤清器垫","tSpec":"","tOE":"P30114342","tUnit":"只","tProduceNumber":"","tBrand":"","tCarModel":"","tProduceAddress":"","tAlarmValue":"0.00","tSalePrice":"10.00","tLastBuyPrice":"10.00","tTaxRate":"1.06","tWeightedCost":"9","tCategoryCode":"400","tCategoryName":"400-车身"}]
        showResult(data, str);
    }},
    {field: 'PartName', title: '配件名称', align: 'left', width: 125,formatter:function(value, row, index){
        return row.tPartName||row.PartName||""
    }},
    {field: 'OE', title: 'OE号', align: 'left', width: 126,formatter:function(value, row, index){
        return row.tOE||row.OE||""
    }},
    {field: 'Spec', title: '规格', align: 'left', width: 129, formatter:function(value, row, index){
        return row.tSpec||row.Spec||""
    }},
    {field: 'Unit', title: '单位', align: 'left', width: 130,formatter:function(value, row, index){
        return row.tUnit||row.Unit||""
    }},
    {field: 'Brand', title: '品牌', align: 'left', width: 127,formatter:function(value, row, index){
        return row.tBrand||row.Brand||""
    }},
    {field: 'CarModel', title: '适用车型', align: 'left', width: 128,formatter:function(value, row, index){
        return row.tCarModel||row.CarModel||""
    }},
    {field: 'ProduceNumber', title: '生产厂号', align: 'left', width: 124, formatter:function(value, row, index){
        return row.tProduceNumber||row.ProduceNumber||""
    }},
    {field: 'ProduceAddress', title: '产地', align: 'left', width: 131, formatter:function(value, row, index){
        return row.tProduceAddress||row.ProduceAddress||""
    },type:'dropdown',source:function (str,showResult) {
        data = ["dropdown1","dropdown2","dropdown3","dropdown4","dropdown5","dropdown6","dropdown7","dropdown8"]
        showResult(data);
    }},
    {field: 'SalePrice', title: '售价', align: 'center', width: 120, sortable: true,type:'disabled',formatter:function(value, row, index){
        return row.tSalePrice||row.SalePrice||""
    }},
    {field: 'OutStoreAmount', title: '数量', align: 'center', width: 120, sortable: true,formatter:function(value, row, index){
        return row.tOutStoreAmount||row.OutStoreAmount||1
    }},
    {field: 'LastBuyPrice', title: '进货价', align: 'left', width: 135, sortable: true,formatter:function(value, row, index){
        return row.tLastBuyPrice||row.LastBuyPrice||""
    }},
    {field: 'TaxRate', title: '税率', align: 'left', width: 136, sortable: true,formatter:function(value, row, index){
        return row.tTaxRate||row.TaxRate||""
    }},
    {
        field: 'deleteBtn', title: '操作', align: 'center', width: 120,type:"disabled", formatter: function (value, row, index) {
        return [
            '<a class="btn-delete" href="javascript:void(0)" title="Remove" data-index=' + index + ' data-rowId=' + row.ID + '>删除',
            '</a>'
        ].join('');
    }
    }
];
var autocompleteColumns = [
    {field: 'tPartCode', title: '配件自编号', align: 'left', width: 123},
    {field: 'tPartName', title: '配件名称', align: 'left', width: 125, sortable: true},
    {field: 'tOE', title: 'OE号', align: 'left', width: 126, sortable: true},
    {field: 'tBrand', title: '品牌', align: 'left', width: 127, sortable: true}
];

$("#selectedParts-excel").excelTable({
    columns:selectedPartsColumns,
    autocompleteColumns:autocompleteColumns,
    data:[],
});