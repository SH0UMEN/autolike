<template>
    <div class="balance-slide-two">
        <div class="tab__container">
            <div class="balance-slide-two__history-record" v-for="record in history"
                 :class="{ 'balance-slide-two__history-record_error': record.status == 2 }">
                <span class="balance-slide-two__money">
                    <img v-if="record.status == 0" src="/images/checked.svg" alt="">
                    <img v-else-if="record.status == 1" src="/images/clock.svg" alt="">
                    <img v-else src="/images/alert-circle.svg" alt="">
                    {{ record.score }} бал. ({{ record.money }} руб)
                </span>
                <span class="balance-slide-two__date">
                    {{ record.date }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BalanceHistory",
        props: {
            history: {
                type: Array,
                required: true
            }
        },
    }
</script>