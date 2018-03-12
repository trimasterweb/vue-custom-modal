Vue.component('custom-modal',{
		data: function(){
			return {
				visible: false
			}
		},
		methods: {
			showModal: function(show){
				this.visible = show
			},
			getStyle: function(){
				return 'width:'+this.width+'px;height:'+this.height+'px;margin-left:-'+(this.width/2)+'px;margin-top:-'+(this.height/2)+'px';
			}		
		},
		props: {
			width: { type: Number, default: 500 },
			height: { type: Number, default: 500 },
			title: { type: String, default: 'Custom Modal' }
		},
		template: '	<div class="custom-modal-overlay" v-if="visible" @click="showModal(false)">\
						<div class="custom-modal-content" @click.stop.prevent="" :style="this.getStyle()">\
							<header><h2>{{title}}</h2> <a href="javascript:" title="Fechar" @click.stop.prevent="showModal(false)" class="close">fechar</a></header>\
							<div class="custom-modal-body">\
								<slot></slot>\
							</div>\
						</div>\
					</div>'
	})
