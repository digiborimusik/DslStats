<View style={styles.controlBar}>
<TouchableOpacity style={styles.button}
    onPress={() => {
        if (!this.interval) {
            this.interval = setInterval(() => {
                dispatch(telnet_request('monoyjin'))
            }, 500);
        }

    }} >
    <Text style={styles.buttonText}>Start</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}
    onPress={() => {

        clearInterval(this.interval);
        this.interval = null
    }} >
    <Text style={styles.buttonText}>Stop</Text>
</TouchableOpacity>


<Picker
    selectedValue={selectedValue}
    style={styles.picker}
    mode='dropdown'
    label="blue"
    itemStyle={{ backgroundColor: 'lightgrey', marginLeft: 0, paddingLeft: 15 }}
    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
>
    <Picker.Item label="Dlink2640u" value="Dlink2640u" />
    <Picker.Item label="MiNano" value="MiNano" />
</Picker>
</View>
<View style={styles.resultArea}>
<ScrollView
    ref={ref => { this.scrollView = ref }}
    onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })}
>
    <Text style={styles.resultAreaText}>

        {/* {someshit.map(el => {
            return (
                el.data.status + '\n' +
                el.data.raw + ' ' + el.key + '\n' +
                JSON.stringify(el.data.stats) + '\n' +
                el.key + '\n' +
                el.data.counter + '\n' +
                el.data.date + '\n'
            )
        })} */}

        {someshit.length ? (
            someshit[someshit.length - 1].data.status + '\n' +
            someshit[someshit.length - 1].data.raw + '\n' +
            JSON.stringify(someshit[someshit.length - 1].data.stats) + '\n' +
            someshit[someshit.length - 1].key + '\n' +
            someshit[someshit.length - 1].data.counter + '\n' +
            someshit[someshit.length - 1].data.date + '\n'
        ) : ''}

    </Text>
</ScrollView>
</View>