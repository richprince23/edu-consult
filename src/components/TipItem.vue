<template>
    <div class="d-flex flex-row justify-content-start justify-content-md-center align-items-center p-3 border rounded m-3">
        <i class="gg-radio-checked text-main" ></i>
        <div class="mx-2"></div>
        <p class="text-black-50 m-0">
            {{ desc }}
        </p>
        <div class="mr-5"></div>
    </div>
</template>

<script >


export default {
    props: {
        desc: {
            type: String,
            required: true,
        }
    }
}

</script>