<template xmlns="http://www.w3.org/1999/html">
	<div id="app">
		<router-link to="/" tag="el-link" type="primary">返回主页</router-link>
		<span>饿了么组件</span>
		<el-time-select
				v-model="value"
				:picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
				placeholder="选择时间">
		</el-time-select>
		<el-row :gutter="20">
			<el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
			<el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
		</el-row>
		<button @click="addData">添加</button>
		<button @click="delData">删除</button>
		<button @click="del1">添加新字段</button>
	
	</div>
</template>

<script>

import logger from "../../utils/logger";
import db from "../../utils/db";

export default {
	name: "index",
	data() {
		return {
			msg: "这是第一个组件",
			value:''
		}
	},
	methods:{
		addData(){
				let  insertSQL  = `INSERT INTO list (name,create_time,standard_buy_unit_price) VALUES ('搜嘎','21999993','1233')`
			this.$db.run(insertSQL,err=>{
				if (err) {
					console.log(err);
				}
				console.log('添加!')
			})
		},
		delData(){
			this.$db.run(`DELETE FROM list`,err=>{
				if (err) {
					console.log(err);
				}
				console.log('删除成功!')
			})
		}	,
		del1(){
			this.$db.run(`ALTER TABLE list ADD  datatype`, err => {
				logger(err);
			});
		}
	}
}
</script>

<style lang="scss" scoped>
@mixin left  {
	margin-bottom: 20px;
}
.el-row {
	@include left;
	

&:last-child {
	margin-bottom: 0;
}

}
.el-col {
	border-radius: 4px;
}

.bg-purple-dark {
	background: #99a9bf;
}

.bg-purple {
	background: #d3dce6;
}

.bg-purple-light {
	background: #e5e9f2;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
}

.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>
