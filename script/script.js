const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scaler'); // إضافة الكلاس عند الرؤية
    }
  });
});

// تحديد العناصر المراد مراقبتها
const hiddenElements = document.querySelectorAll('.partners,.text');
hiddenElements.forEach((el) => observer.observe(el));
