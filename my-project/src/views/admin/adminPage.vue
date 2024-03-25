<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
            <el-row style="width: 100%">
                <el-col :span="5"><span>信息检索: </span></el-col>
                <el-col :span="8"> <el-input></el-input></el-col>
                <el-col :span="3"></el-col>
                <el-col :span="4"> <el-button type="primary"> <el-icon><Search /></el-icon>搜索</el-button></el-col>
                <el-col :span="4"> <el-button type="primary"> <el-icon><Search /></el-icon>高级搜索</el-button></el-col>
            </el-row>
           </div>
        </template>
        <div class="content">
            <div class="contentleft">
                信息筛选
            </div>
            <div class="contentCenter">
                <el-row style="margin-top: 12px">
                    <el-col :span="4">
                        <span>选择关键字：</span>
                    </el-col>
                    <el-col :span="9">
                        <el-input></el-input>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 12px">
                    <el-col :span="4">
                        <span>选择发帖日期：</span>
                    </el-col>
                    <el-col :span="9">
                        <el-date-picker
                                style="width: 100%"
                                v-model="value2"
                                type="datetimerange"
                                :shortcuts="shortcuts"
                                range-separator="To"
                                start-placeholder="Start date"
                                end-placeholder="End date"
                        />
                    </el-col>
                </el-row>
                <el-row style="margin-top: 12px">
                    <el-col :span="4">
                        <span>选择采集日期：</span>
                    </el-col>
                    <el-col :span="9">
                        <el-date-picker
                                style="width: 100%"
                                v-model="value2"
                                type="datetimerange"
                                :shortcuts="shortcuts"
                                range-separator="To"
                                start-placeholder="Start date"
                                end-placeholder="End date"
                        />
                    </el-col>
                </el-row>
                <el-row style="margin-top: 12px">
                    <el-col :span="4">
                        <span>选择热度：</span>
                    </el-col>
                    <el-col :span="9">
                        <el-input></el-input>
                    </el-col>
                </el-row>

            </div>
        </div>
        <div>
         <el-row style="margin-top: 12px">
            <el-col :span="5">
            </el-col>
            <el-col :span="15">
                <el-radio-group v-model="radio1" class="ml-4">
                    <el-radio label="1" size="large">不限</el-radio>
                    <el-radio label="2" size="large">微博</el-radio>
                    <el-radio label="3" size="large">脸书</el-radio>
                    <el-radio label="4" size="large">推特</el-radio>
                    <el-radio label="5" size="large">三立新闻</el-radio>
                    <el-radio label="6" size="large">卡提诺</el-radio>
                    <el-radio label="7" size="large">自由时报</el-radio>
                    <el-radio label="8" size="large">伊莉</el-radio>
                </el-radio-group>

            </el-col>
            <el-col :span="2"> <el-button type="primary"> 筛选</el-button></el-col>
            <el-col :span="2"> <el-button type="primary"> 返回默认值</el-button></el-col>
        </el-row>
        </div>
    </el-card>

    <el-card class="box-card-content">
        <template #header>
            <div class="card-header">
                <el-row style="width: 100%">
                    <el-col :span="12"><span>则连斯基:的外交苹果飞机哇哦法国金额Iowa分解挖坟</span>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始内容</a>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始链接</a>
                    </el-col>
                    <el-col :span="8"></el-col>
                    <el-col :span="2"> <el-button type="primary"> 编辑</el-button></el-col>
                    <el-col :span="2"> <el-button type="primary"> 删除</el-button></el-col>

                </el-row>
            </div>
        </template>
        <div>
            <el-row style="margin-top: 12px">
                    <p>
                            垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                        然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                        它们根据对象的生命周期和特性来选择合适的回收策略。
                        垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                        然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                        它们根据对象的生命周期和特性来选择合适的回收策略。
                        垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                        然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                        它们根据对象的生命周期和特性来选择合适的回收策略。
                        垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                        然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                        它们根据对象的生命周期和特性来选择合适的回收策略。
                    </p>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <span style="color: blueviolet">  发帖日期: 2022-04-21  </span>
               </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  采集时间: 2022-04-21 001:40  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  目标网站来源: 自由时报  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">  关键词: 俄乌冲突  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">   内容字数: 485  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">   热度 000498 </span>
                </el-col>
            </el-row>
        </div>
    </el-card>
    <el-card class="box-card-content">
        <template #header>
            <div class="card-header">
                <el-row style="width: 100%">
                    <el-col :span="12"><span>则连斯基:的外交苹果飞机哇哦法国金额Iowa分解挖坟</span>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始内容</a>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始链接</a>
                    </el-col>
                    <el-col :span="8"></el-col>
                    <el-col :span="2"> <el-button type="primary"> 编辑</el-button></el-col>
                    <el-col :span="2"> <el-button type="primary"> 删除</el-button></el-col>

                </el-row>
            </div>
        </template>
        <div>
            <el-row style="margin-top: 12px">
                <p>
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                </p>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <span style="color: blueviolet">  发帖日期: 2022-04-21  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  采集时间: 2022-04-21 001:40  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  目标网站来源: 自由时报  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">  关键词: 俄乌冲突  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">   内容字数: 485  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">   热度 000498 </span>
                </el-col>
            </el-row>
        </div>
    </el-card>
    <el-card class="box-card-content">
        <template #header>
            <div class="card-header">
                <el-row style="width: 100%">
                    <el-col :span="12"><span>则连斯基:的外交苹果飞机哇哦法国金额Iowa分解挖坟</span>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始内容</a>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始链接</a>
                    </el-col>
                    <el-col :span="8"></el-col>
                    <el-col :span="2"> <el-button type="primary"> 编辑</el-button></el-col>
                    <el-col :span="2"> <el-button type="primary"> 删除</el-button></el-col>

                </el-row>
            </div>
        </template>
        <div>
            <el-row style="margin-top: 12px">
                <p>
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                </p>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <span style="color: blueviolet">  发帖日期: 2022-04-21  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  采集时间: 2022-04-21 001:40  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  目标网站来源: 自由时报  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">  关键词: 俄乌冲突  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">   内容字数: 485  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">   热度 000498 </span>
                </el-col>
            </el-row>
        </div>
    </el-card>
    <el-card class="box-card-content">
        <template #header>
            <div class="card-header">
                <el-row style="width: 100%">
                    <el-col :span="12"><span>则连斯基:的外交苹果飞机哇哦法国金额Iowa分解挖坟</span>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始内容</a>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始链接</a>
                    </el-col>
                    <el-col :span="8"></el-col>
                    <el-col :span="2"> <el-button type="primary"> 编辑</el-button></el-col>
                    <el-col :span="2"> <el-button type="primary"> 删除</el-button></el-col>

                </el-row>
            </div>
        </template>
        <div>
            <el-row style="margin-top: 12px">
                <p>
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                </p>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <span style="color: blueviolet">  发帖日期: 2022-04-21  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  采集时间: 2022-04-21 001:40  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  目标网站来源: 自由时报  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">  关键词: 俄乌冲突  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">   内容字数: 485  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">   热度 000498 </span>
                </el-col>
            </el-row>
        </div>
    </el-card>
    <el-card class="box-card-content">
        <template #header>
            <div class="card-header">
                <el-row style="width: 100%">
                    <el-col :span="12"><span>则连斯基:的外交苹果飞机哇哦法国金额Iowa分解挖坟</span>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始内容</a>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始链接</a>
                    </el-col>
                    <el-col :span="8"></el-col>
                    <el-col :span="2"> <el-button type="primary"> 编辑</el-button></el-col>
                    <el-col :span="2"> <el-button type="primary"> 删除</el-button></el-col>

                </el-row>
            </div>
        </template>
        <div>
            <el-row style="margin-top: 12px">
                <p>
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                </p>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <span style="color: blueviolet">  发帖日期: 2022-04-21  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  采集时间: 2022-04-21 001:40  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  目标网站来源: 自由时报  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">  关键词: 俄乌冲突  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">   内容字数: 485  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">   热度 000498 </span>
                </el-col>
            </el-row>
        </div>
    </el-card>
    <el-card class="box-card-content">
        <template #header>
            <div class="card-header">
                <el-row style="width: 100%">
                    <el-col :span="12"><span>则连斯基:的外交苹果飞机哇哦法国金额Iowa分解挖坟</span>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始内容</a>
                        <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始链接</a>
                    </el-col>
                    <el-col :span="8"></el-col>
                    <el-col :span="2"> <el-button type="primary"> 编辑</el-button></el-col>
                    <el-col :span="2"> <el-button type="primary"> 删除</el-button></el-col>

                </el-row>
            </div>
        </template>
        <div>
            <el-row style="margin-top: 12px">
                <p>
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                    垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                    然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                    它们根据对象的生命周期和特性来选择合适的回收策略。
                </p>
            </el-row>
            <el-row>
                <el-col :span="4">
                    <span style="color: blueviolet">  发帖日期: 2022-04-21  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  采集时间: 2022-04-21 001:40  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">  目标网站来源: 自由时报  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">  关键词: 俄乌冲突  </span>
                </el-col>
                <el-col :span="3">
                    <span style="color: blueviolet">   内容字数: 485  </span>
                </el-col>
                <el-col :span="4">
                    <span style="color: blueviolet">   热度 000498 </span>
                </el-col>
            </el-row>
        </div>
    </el-card>
    <el-card class="box-card-content">
    <template #header>
        <div class="card-header">
            <el-row style="width: 100%">
                <el-col :span="12"><span>则连斯基:的外交苹果飞机哇哦法国金额Iowa分解挖坟</span>
                    <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始内容</a>
                    <a href="" style="padding-left: 10px;font-size: 14px;color: #2B5EB5;font-weight: bold">原始链接</a>
                </el-col>
                <el-col :span="8"></el-col>
                <el-col :span="2"> <el-button type="primary"> 编辑</el-button></el-col>
                <el-col :span="2"> <el-button type="primary"> 删除</el-button></el-col>

            </el-row>
        </div>
    </template>
    <div>
        <el-row style="margin-top: 12px">
            <p>
                垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                它们根据对象的生命周期和特性来选择合适的回收策略。
                垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                它们根据对象的生命周期和特性来选择合适的回收策略。
                垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                它们根据对象的生命周期和特性来选择合适的回收策略。
                垃圾回收是JVM的一个重要功能，它通过垃圾回收器（Garbage Collector）来定期扫描堆内存，标记不再被引用的对象，
                然后释放这些对象所占用的内存空间。垃圾回收器有不同的实现方式，包括新生代收集器、老年代收集器、永久代收集器等，
                它们根据对象的生命周期和特性来选择合适的回收策略。
            </p>
        </el-row>
        <el-row>
            <el-col :span="4">
                <span style="color: blueviolet">  发帖日期: 2022-04-21  </span>
            </el-col>
            <el-col :span="4">
                <span style="color: blueviolet">  采集时间: 2022-04-21 001:40  </span>
            </el-col>
            <el-col :span="4">
                <span style="color: blueviolet">  目标网站来源: 自由时报  </span>
            </el-col>
            <el-col :span="3">
                <span style="color: blueviolet">  关键词: 俄乌冲突  </span>
            </el-col>
            <el-col :span="3">
                <span style="color: blueviolet">   内容字数: 485  </span>
            </el-col>
            <el-col :span="4">
                <span style="color: blueviolet">   热度 000498 </span>
            </el-col>
        </el-row>
    </div>
</el-card>

</template>


<script setup name="adminPage">
    import { ref } from 'vue'
    const radio1 = ref('1')
</script>
<style>
    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 100%;
    }
    .content{
        width: 100%;
        display: flex;
    }
    .contentleft{
        width: 20%;
    }
    .contentCenter{
        margin-top: 20px;
        width: 60%;
    }
    .box-card-content{
        margin-top: 30px;
    }
    p {
        text-indent: 2em; /* 设置首行缩进为2个字符宽度 */
    }
</style>