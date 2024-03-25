// 获取根元素和其他DOM元素
const root = document.documentElement; // 获取根元素
const eye = document.querySelector('#eyeball'); // 获取眼睛按钮元素
const beam = document.querySelector('#beam'); // 获取光束元素
const passwordInput = document.querySelector('#password'); // 获取密码输入框元素

// 鼠标移动事件监听器
root.addEventListener('mousemove', (e) => {
    // 获取光束的位置和鼠标位置
    let rect = beam.getBoundingClientRect(); // 获取光束元素的位置信息
    let mouseX = rect.right + (rect.width / 2); // 光束的横坐标
    let mouseY = rect.top + (rect.height / 2); // 光束的纵坐标
    // 计算角度
    let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY); // 计算鼠标和光束之间的角度
    let degrees = (rad * (20 / Math.PI) * -1) - 350; // 将弧度转换为角度
    // 设置根元素的样式变量
    root.style.setProperty('--beamDegrees', `${degrees}deg`); // 设置根元素的样式变量，控制光束的旋转角度
});

// 眼睛按钮点击事件监听器
eye.addEventListener('click', e => {
    e.preventDefault(); // 阻止默认行为
    // 切换显示密码的状态
    document.body.classList.toggle('show-password'); // 切换body元素的类名，控制密码是否显示
    // 切换密码输入框的类型
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'; // 切换密码输入框的类型，控制密码是否显示
    // 聚焦到密码输入框
    passwordInput.focus(); // 将焦点聚焦到密码输入框
});
