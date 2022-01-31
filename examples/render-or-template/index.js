const {h, createApp} = Vue
const Stack = {
	render() {
		const slots = this.$slots.default ? this.$slots.default() : []
		return h('div', {
			class: 'stack'
		}, slots.map(child => {
			return h('div', {
				class: `mt-${this.$props.size}`
			}, [child])
		}))
	}
}
const App = {
	components: {
		Stack
	},
	template: `
			<stack>
			<div>hello</div>
				<stack class="mt-10">
					<div>hello</div>
					<div>hello</div>
					<stack class="mt-10">
						<div>hello</div>
						<div>hello</div>
			</stack>
				</stack>
			</stack>
		`
}
createApp(App).mount('#app')
