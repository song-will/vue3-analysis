
/**
 * 生成虚拟dom
 * @param {*} tag 
 * @param {*} props 
 * @param {*} children 
 */
const h = (tag, props, children) => {

    return tag && !props && !children ? tag : {
        tag,
        props,
        children
    }
}
/**
 * 将虚拟dom转化成真实dom，并插入到外层容器中
 * @param {*} vdom 
 * @param {*} container 
 */
const mount = (vdom, container) => {
    // if (typeof vdom === 'string') {
    //     console.log('container',container)
    //     container.innerText = vdom
    // }
    // console.log('vdom', vdom)
    let el
    if (typeof vdom === 'string') {
        el = document.createElement('span')
        el.innerText = vdom
    } else {
        el = document.createElement(vdom.tag)
    }
    if (vdom.props) {
        for (const key in vdom.props) {
            const value = vdom.props[key]
            el.setAttribute(key, value)
        }
    }
    if (vdom.children) {
        if (typeof vdom.children === 'string') {
            el.textContent = vdom.children
        } else {
            vdom.children.forEach(child => {
                mount(child, el)
            })
        }
    }
    container.appendChild(el)
}

const vdom = h('div', { class: 'red' }, [h('span', { class: 'green' }, [h('ul', null, [h('li', null, 'song')])]), h('p', { class: 'orange' }, 'orange'), 'ss'])

mount(vdom, document.getElementById('app'))