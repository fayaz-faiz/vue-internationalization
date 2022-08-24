<template>
    <div class="hello">
        <form action="/action_page.php">
            <label for="fname">{{ $t('fName') }}</label> 
            <input class='main' type="text" id="fname" v-model="post.fName" name="fname" data-toggle="tooltip"
                data-placement="top" :title="$t('tooltip')" :placeholder="$t('fNamePlaceholder')"><br><br>
            <label for="lname">{{ $t('lName') }}</label>
            <input class='main' type="text" id="lname" name="lname" v-model="post.lName" :placeholder="$t('lNamePlaceholder')"><br><br>
            <label for="country">{{ $t('country') }}</label> 
            <select class='main' id="country" name="country" v-model="post.country">
                 <option disabled value="">{{ $t('selectedCountry') }}</option>
                <option value="India">{{ $t('India') }}</option>
                <option value="canada">{{ $t('Canada') }}</option>
                <option value="usa">{{ $t('USA') }}</option>
            </select> <br><br>
            <!-- <abc>hello</abc> -->
            <abc>{{$t('abc')}}</abc>
            <label>{{ $t('Textarea') }} </label>
            <textarea v-model="post.textarea" class='main' :placeholder="$t('fNamePlaceholder')" rows='5' cols="20" /><br><br>
            <div class="container">
                <img src="https://www.w3schools.com/tags/img_girl.jpg" alt="Girl in a jacket" width="350" height="300">
                <div class="overlay">
                    <!-- <div class="text">Hello World</div> -->
                    <h1>{{ $t('fayaz') }}</h1>
                </div>
            </div>
        </form>
        <button @click="submit">{{ $t('submitbtn') }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post:{
                fName:'',
                lName:'',
                country:'',
                textarea:'',
            }

        }
    },
    name: 'HelloWorld',
    props: {
        msg: String
    },
    methods: {
        submit() {
            console.log('data Submited sucessfully.....');
            console.log('post data:',this.post);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    /* width: 95%; */
    padding: 18px 20px;
    border: none;
    border-radius: 5px;
    background-color: #f1f1f1;
}
/* Image styles */
.container {
    position: relative;
}
.image {
    display: block;
    width: 100%;
    /* height: auto; */
}

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /* height: 100%; */
    width: 100%;
    opacity: 0;
    transition: 3.5s ease;
    background-color: transparent;
}

.container:hover .overlay {
    opacity: 1;
}

.text {
    color: rgb(19, 18, 18);
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}
button {
    color: rgb(255, 9, 9);
    padding: 12px;
}
</style>
