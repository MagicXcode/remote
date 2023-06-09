
<template>
    <div class="timeline" ref="timeline">
      <div class="item" v-for="(item, index) in items" :key="index" :class="{ active: index === activeIndex }">
        <div class="date">{{ item.date }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const timeline = ref(null);
      const items = [
        { date: '2022-01-01', content: '事件1' },
        { date: '2022-01-02', content: '事件2' },
        { date: '2022-01-03', content: '事件3' },
        { date: '2022-01-04', content: '事件4' },
        { date: '2022-01-05', content: '事件5' },
        { date: '2022-01-06', content: '事件6' },
        { date: '2022-01-07', content: '事件7' },
      ];
      let activeIndex = 0;
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
      });
  
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const timelineRect = timeline.value.getBoundingClientRect();
        const items = timeline.value.querySelectorAll('.item');
        const itemRects = Array.from(items).map((item) => item.getBoundingClientRect());
  
        for (let i = 0; i < itemRects.length; i++) {
          const itemRect = itemRects[i];
          if (itemRect.top <= timelineRect.top && itemRect.bottom >= timelineRect.bottom) {
            activeIndex = i;
          }
        }
  
        timeline.value.querySelector('.active').classList.remove('active');
        items[activeIndex].classList.add('active');
      };
  
      return {
        timeline,
        items,
        activeIndex,
        handleScroll,
      };
    },
  };
  </script>
  
  <style>
  .timeline {
    position: relative;
    height: 500px;
    overflow-y: scroll;
  }
  
  .item {
    position: relative;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #f7f7f7;
    border-radius: 5px;
  }
  
  .date {
    font-weight: bold;
  }
  
  .active {
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  </style>