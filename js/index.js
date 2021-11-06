console.log('hello, World');

document.querySelector('.project-1').addEventListener('click', function () {
  document.querySelector('.project-1_content').classList.toggle('hidden');
  document.querySelector('.arrow-1').classList.toggle('arrow-up');
});

document.querySelector('.project-2').addEventListener('click', function () {
  document.querySelector('.project-2_content').classList.toggle('hidden');
  document.querySelector('.arrow-2').classList.toggle('arrow-up');
});

document.querySelector('.project-3').addEventListener('click', function () {
  document.querySelector('.project-3_content').classList.toggle('hidden');
  document.querySelector('.arrow-3').classList.toggle('arrow-up');
});
