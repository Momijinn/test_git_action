window.onload = function () {
  console.log('start');

  const btn = document.getElementById('button');
  btn.addEventListener('click', () => {
    alert('push');
  });
}