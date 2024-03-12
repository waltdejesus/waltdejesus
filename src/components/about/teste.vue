<template>
    <div href="#">
  Damn, I'm Shiny
  <i></i>
    </div>
</template>


<style scoped>


div {
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 5px;
  color: #FAFAFA;
  border: 3px solid #FAFAFA;
  padding: 25px;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  transition: background 0.15s ease-in-out;
}

a:hover {
  background: rgba(8, 97, 76, 0.6);
}

i {
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 15%;
  height: 100%;
  transform: skew(-10deg, 0deg);
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.03) 1%, rgba(255, 255, 255, 0.6) 30%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.85) 70%, rgba(255, 255, 255, 0.85) 71%, rgba(255, 255, 255, 0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ffffff', endColorstr='#00ffffff', GradientType=1);
  animation: move 2s infinite 1s;
}

@keyframes move {
  0% {
    left: 0;
    opacity: 0;
  }
  5% {
    opacity: 0.0;
  }
  48% {
    opacity: 0.2;
  }
  80% {
    opacity: 0.0;
  }
  100% {
    left: 82%;
  }
}

</style>