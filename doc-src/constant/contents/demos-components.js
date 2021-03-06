module.exports = `
        <section class="demo-box">
            <div class="code-2-demo bg-demo">Canvas2D UI组件：滚动、按钮、文本组件</div>
            <code>
                <head>
                    <script src="./lib/easycanvas/components.standalone.prod.js"></script>
                </head>
                <body>
                    <canvas id="app" style="width: 400px; height: 400px;"></canvas>
                </body>

                <script>
                    var $app = new Easycanvas.painter({
                        el: '#app',
                        width: 800,
                        height: 800
                    });

                    $app.start();

                    // 滚动

                    var $scroll = $app.add(Easycanvas.class.scroll({
                        name: 'scroll-box',
                        style: {
                            tx: 50, ty: 50,
                            tw: 400, th: 700,
                            locate: 'lt',
                            backgroundColor: '#ccc',
                            overflow: 'hidden'
                        },
                        scroll: {
                            scrollable: true,
                            smooth: 0.9
                        }
                    }));

                    $scroll.add({
                        content: {
                            text: 'Scroll Area',
                        },
                        style: {
                            tx: 400, ty: 0,
                            textFont: '36px Helvetica',
                            textAlign: 'right',
                            textVerticalAlign: 'top',
                            color: '#999'
                        }
                    })

                    var ty = 10;
                    for (var i = 0; i < 15; i++) {
                        $scroll.add({
                            name: 'root',
                            content: {
                                img: 'https://raw.githubusercontent.com/c-zhuo/easycanvas/master/demos/G.png',
                            },
                            style: {
                                tw: i * 10 + 50,
                                th: i * 10 + 50,
                                tx: Easycanvas.transition.pendulum(10, i * 20, 2000).loop(),
                                ty: ty,
                                locate: 'lt',
                                zIndex: 1,
                            }
                        });

                        ty += i * 10 + 60;
                    }

                    $scroll.scroll.maxScrollY = ty - $scroll.getStyle('th');

                    // 按钮

                    $app.add(Easycanvas.class.button({
                        name: 'button-1',
                        props: {
                            text: 'click',
                            normal: {
                                size: 24,
                                color: '#2eb6a8',
                                border: '4px solid #2eb6a8',
                                family: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                            },
                            pressed: {
                                color: '#FFF',
                                backgroundColor: '#2eb6a8',
                            },
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 50,
                            tw: 100, th: 50,
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    $app.add(Easycanvas.class.button({
                        name: 'button-2',
                        props: {
                            text: 'hover',
                            normal: {
                                size: 24,
                                color: '#2eb6a8',
                                border: '4px solid #2eb6a8',
                                family: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                            },
                            hovered: {
                                color: '#FFF',
                                backgroundColor: '#2eb6a8',
                            },
                        },
                        style: {
                            locate: 'lt',
                            tx: 620, ty: 50,
                            tw: 100, th: 50,
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    $app.add(Easycanvas.class.button({
                        name: 'button-3',
                        props: {
                            text: 'hover & click',
                            normal: {
                                size: 24,
                                color: '#2eb6a8',
                                border: '4px solid #2eb6a8',
                                family: '"Helvetica Neue",Helvetica,Arial,sans-serif',
                            },
                            hovered: {
                                color: '#FFF',
                                backgroundColor: '#2eb6a8',
                            },
                            pressed: {
                                color: '#FFF',
                                backgroundColor: '#1a988b',
                            },
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 120,
                            tw: 220, th: 50,
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    // 文本

                    $app.add(Easycanvas.class.text({
                        name: 'text-1',
                        content: {
                            text: '这里是一段单行的文本',
                        },
                        props: {
                            size: 24,
                            width: 240,
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 220,
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    $app.add(Easycanvas.class.text({
                        name: 'text-2',
                        content: {
                            text: '这里是一段很长的单行文本',
                        },
                        props: {
                            size: 24,
                            width: 240,
                            overflow: 'ellipsis'
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 270,
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    $app.add(Easycanvas.class.text({
                        name: 'text-3',
                        content: {
                            text: '这里是一段多行文本abcdefg1234567！？：.,?',
                        },
                        props: {
                            size: 24,
                            width: 240,
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 320,
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    $app.add(Easycanvas.class.text({
                        name: 'text-4',
                        content: {
                            text: 'emoji🐶',
                        },
                        props: {
                            size: 24,
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 420,
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    $app.add(Easycanvas.class.text({
                        name: 'text-5',
                        content: {
                            text: 'padding 10px 30px',
                        },
                        props: {
                            size: 24,
                            padding: '10px 30px'
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 470,
                            backgroundColor: '#AAA',
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    $app.add(Easycanvas.class.text({
                        name: 'text-6',
                        content: {
                            text: 'text 24, lineHeight 72, text 24, lineHeight 72',
                        },
                        props: {
                            size: 24,
                            lineHeight: 72,
                            width: 240,
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 540,
                            backgroundColor: '#AAA',
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));

                    $app.add(Easycanvas.class.text({
                        name: 'text-7',
                        content: {
                            text: 'color & font 颜色字体',
                        },
                        props: {
                            size: 24,
                            color: '#F00',
                            family: 'cursive, KaiTi, Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑", Arial, sans-serifsans-serif'
                        },
                        style: {
                            locate: 'lt',
                            tx: 500, ty: 700,
                        },
                        events: {
                            click () {
                                console.log(this.name);
                            }
                        }
                    }));
                </script>
            </code>
        </section>
`;
