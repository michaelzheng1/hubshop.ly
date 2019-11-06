/*<div class="jumbotron">
  <h1>On/Off Switch</h1>
  <p class="lead">Bootstrap Button Toggle</p>
</div>

<div class="container example">
  
  <div class="row">
    <div class="col-sm-12">
      <h3>Default Color <small>(Brand Primary)</small></h3>
    </div>
  </div>

  <div class="row">

    <div class="col-sm-2">
      <h6>Large</h6>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-lg btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-lg btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-2">
      <h6>Default</h6>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-2">
      <h6>Small</h6>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-sm btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-sm btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-2">
      <h6>Mini</h6>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-xs btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-xs btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

  </div>

</div>  



<!-- Secondary Color -->

<div class="container example">

  <div class="row">
    <div class="col-sm-12">
      <h3>Secondary Color <small>(Brand Secondary)</small></h3>
    </div>
  </div>
  
  <div class="row">

    <div class="col-sm-2">
      <h6>Large</h6>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-lg btn-secondary btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-lg btn-secondary btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

  </div>
  
  <div class="row">

    <div class="col-sm-2">
      <h6>Default</h6>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-secondary btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-secondary btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-2">
      <h6>Small</h6>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-sm btn-secondary btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-sm btn-secondary btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

  </div>

  <div class="row">

    <div class="col-sm-2">
      <h6>Mini</h6>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-xs btn-toggle" data-toggle="button" aria-pressed="false" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

    <div class="col-sm-5">
      <button type="button" class="btn btn-xs btn-secondary btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
        <div class="handle"></div>
      </button>
    </div>

  </div>


</div><!-- /.container -->




// Colors
@brand-primary: #29b5a8;
@brand-secondary: #ff8300;
@gray: #6b7381;
@gray-light: lighten(@gray, 15%);
@gray-lighter: lighten(@gray, 30%);;

// Button Colors
@btn-default-color: @gray;
@btn-default-bg: @gray-lighter;

// Toggle Sizes
@toggle-default-size: 1.5rem;
@toggle-default-label-width: 4rem;
@toggle-default-font-size: .75rem;


// General Styles for Demo
body {
	font-family: 'Montserrat', 'Lato', 'Open Sans', 'Helvetica Neue', Helvetica, Calibri, Arial, sans-serif;
	color: @gray;
	background: #f2f2f2;
}
.jumbotron {
  background: @gray;
  color: @gray-lighter;
  h1 {
    color: #fff;
  }
}
.example {
  margin: 4rem auto;
  > .row {
    margin-top: 2rem;
    height: 5rem;
    vertical-align: middle;
    text-align: center;
    border: 1px solid fade(@gray-lighter,50%);
    &:first-of-type {
      border:none;
      height: auto;
      text-align: left;
    }
  }
  h3 {
    font-weight: 400;
    > small {
      font-weight: 200;
      font-size: .75em;
      color: @gray-light;
    }
  }
  h6 {
    font-weight: 700;
    font-size: .65rem;
    letter-spacing: 3.32px;
    text-transform: uppercase;
    color: @gray-lighter;
    margin: 0;
    line-height:5rem;
  }
  .btn-toggle {
    top: 50%;
    transform: translateY(-50%);
  }
}



// Mixin for Switch Colors
// Variables: @color, @bg, @active-bg
.toggle-color(@color: @btn-default-color; @bg: @btn-default-bg; @active-bg: @brand-primary;) {
  color: @color;
  background: @bg;
  &:before,
  &:after {
    color: @color;
  }
  &.active {
    background-color: @active-bg;
  }
}

// Mixin for Default Switch Styles
// Variables: @size, @margin, @color, @bg, @active-bg, @font-size
.toggle-mixin(@size: @toggle-default-size; @margin: @toggle-default-label-width; @font-size: @toggle-default-font-size;) {
  // color: @color;
  // background: @bg;
  margin: 0 @margin;
  padding: 0;
  position: relative;
  border: none;
  height: @size;
  width: @size * 2;
  border-radius: @size;
  
  &:focus,
  &.focus {
    &,
    &.active {
      outline: none;
    }
  }
  
  &:before,
  &:after {
    line-height: @size;
    width: @margin;
    text-align: center;
    font-weight: 600;
    // color: @color;
    font-size: @font-size;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: absolute;
    bottom: 0;
    transition: opacity .25s;
  }
  &:before {
    content: 'Off';
    left: -@margin;
  }
  &:after {
    content: 'On';
    right: -@margin;
    opacity: .5;
  }
  
  > .handle {
    position: absolute;
    top: (@size * .25) / 2;
    left: (@size * .25) / 2;
    width: @size * .75;
    height: @size * .75;
    border-radius: @size * .75;
    background: #fff;
    transition: left .25s;
  }
  &.active {
    transition: background-color .25s;
    > .handle {
      left: @size + ((@size * .25) / 2);
      transition: left .25s;
    }
    &:before {
      opacity: .5;
    }
    &:after {
      opacity: 1;
    }
  }
  
  &.btn-sm {
    &:before,
    &:after {
      line-height: @size - 2px;
      color: #fff;
      letter-spacing: .75px;
      left: @size * .275;
      width: @size * 1.55;
    }
    &:before {
      text-align: right;
    }
    &:after {
      text-align: left;
      opacity: 0;
    }
    &.active {
      &:before {
        opacity: 0;
      }
      &:after {
        opacity: 1;
      }
    }
  }
  
  &.btn-xs {
    &:before,
    &:after {
      display: none;
    }
  }
}



// Apply Mixin to different sizes & colors
.btn-toggle {
  
  .toggle-mixin;
  .toggle-color;
  
  &.btn-lg {
    .toggle-mixin(@size: 2.5rem; @font-size: 1rem; @margin: 5rem;);
  }
  
  &.btn-sm {
    .toggle-mixin(@font-size: .55rem; @margin: .5rem;);
  }
  
  &.btn-xs {
    .toggle-mixin(@size:1rem;@margin:0;)
  }
  
  &.btn-secondary {
    .toggle-color(@active-bg:@brand-secondary);
  }
}
*/