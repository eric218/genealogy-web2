<template>
    <div>
        <div class="tabs">
            <Tabs>
                <TabPane :label="v.name" :name="v.name" v-for="(v,i) in menu" :key="i"></TabPane>
            </Tabs>
        </div>
        <Button type="primary">添加人物</Button>
        <Table border :columns="columns1" :data="data1" style="margin:16px 0;"></Table>
        <Page :total="50" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: [{
                id: 1,
                name: '会长',
            }, {
                id: 2,
                name: '副会长',
            }, {
                id: 3,
                name: '族长',
            }, {
                id: 4,
                name: '官员',
            }, {
                id: 5,
                name: '企业家',
            }],
            columns1: [
                {
                    title: 'ID',
                    key: 'id',
                    width: 100
                },
                {
                    title: '缩略图',
                    key: 'thumb',
                },
                {
                    title: '标题',
                    key: 'title'
                },
                {
                    title: '发布人',
                    key: 'user'
                },
                {
                    title: '浏览数',
                    key: 'count'
                },
                {
                    title: '转发数',
                    key: 'share'
                },
                {
                    title: '日期',
                    key: 'date'
                },
                {
                    title: 'Action',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                    icon: 'ios-eye',
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }),
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small',
                                    icon: 'ios-create',
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small',
                                    icon: 'md-trash',

                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            })
                        ]);
                    }
                }
            ],
            data1: [
                {
                    id: 1,
                    thumb: '',
                    user: '李四',
                    title: '标题标题',
                    count: '123',
                    share: '111',
                    date: '2016-10-03'
                },
                {
                    id: 2,
                    thumb: '',
                    user: '张三',
                    title: '标题标题',
                    count: '111',
                    share: '125',
                    date: '2016-10-04'
                }
            ]
        }
    },
    mounted() {
    },
    methods: {
        show(index) {
            this.$Modal.info({
                title: '提示',
                content: '查看正文'
            })
        },
        remove(index) {
            this.$Modal.confirm({
                title: '提示',
                content: '确定删除这个文章？',
                onOk: () => {
                    this.data1.splice(index, 1);
                },
                onCancel: () => {
                }
            });
        }
    }
}
</script>