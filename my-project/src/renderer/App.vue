<template>
  <div id="app">
	  <div class="fake-title-bar">
		  <button @click="asd">asd</button>
		  <div class="handle-bar" v-if="os === 'win32'"> <!-- 如果是windows系统 就加上模拟的操作按钮-->
			  <i class="el-icon-minus" @click="minimizeWindow"></i>
			  <i class="el-icon-close" @click="closeWindow"></i>
		  </div>
	  </div>
	 
    <router-view></router-view>

  </div>
</template>

<script>
	import os from 'os'
  export default {
    name: 'my-project',
	  data(){
    	return{
		    os
	    }
	  },
	  mounted(){
		  this.add()
	  },
	  methods: {
		    add(){
			    var Menu = require('electron').remote.Menu;
			 
			    let template = [
				    {
					    label: '加载网页1',
					    submenu: [
						    {
							    label: '优酷',
							    click:()=>{
								  alert("优酷")
							    }
						    },
						    {
							    type: 'separator'
						    },
						    {
							    label: '百度',
							    click:()=>{
								    console.log('百度')
							    }
						    }
					
					    ]
				    },
				    {
					    label: '点击测试', click: () => {
						    console.log('点击事件ok')
					    }
				    },
				    {role: 'undo'},
				    {label: "旅游", type: 'checkbox', checked: true},
				    {label: "吃", type: 'checkbox', checked: true},
				    {label: "逛街", type: 'checkbox', checked: false},
			    ]
			    let menu = Menu.buildFromTemplate(template)
			    Menu.setApplicationMenu(menu)
			    // menu.popup()
			   
		    },
		  asd(){
			    const {ipcRenderer} = require('electron')
			    // console.log(ipcRenderer.sendSync('synchronous-message', '传值')) // prints "pong"
			    // ipcRenderer.on('asynchronous-reply', (event, arg) => {
				  //   console.log(arg) // prints "pong"
			    // })
			    ipcRenderer.send('asynchronous-message', 'ping')
		    }
	    }
  }
</script>

<style>

  /* CSS */
  .fake-title-bar {
	  width: 100%;
	  height:20px;
	  background-color: red;
	  -webkit-app-region: drag
  }
  .handle-bar {
	  -webkit-app-region: no-drag
  }
  input {
	  -webkit-app-region: no-drag;
  }
  body {
	  overflow-x: hidden;
  }
</style>
