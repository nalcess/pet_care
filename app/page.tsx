'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';

function getTodayValue() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today.toISOString().slice(0, 10);
}

export default function Home() {
  const [minDate, setMinDate] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    setMinDate(getTodayValue());
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const pet = String(data.get('pet') ?? '');
    const service = String(data.get('service') ?? '');
    const date = String(data.get('date') ?? '');
    const time = String(data.get('time') ?? '');

    setStatus(`${name}，已收到 ${pet}「${service}」预约：${date} ${time}。门店会尽快电话确认。`);
    form.reset();
  }

  return (
    <><header className="site-header">
    <nav className="nav" aria-label="主导航">
      <a className="brand" href="#top" aria-label="绒爪宠物洗护首页">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M8.2 10.4c1 0 1.8-1 1.8-2.3S9.2 5.8 8.2 5.8 6.4 6.8 6.4 8.1s.8 2.3 1.8 2.3Zm7.6 0c1 0 1.8-1 1.8-2.3s-.8-2.3-1.8-2.3-1.8 1-1.8 2.3.8 2.3 1.8 2.3ZM5.2 14.2c.9 0 1.6-.9 1.6-2s-.7-2-1.6-2-1.6.9-1.6 2 .7 2 1.6 2Zm13.6 0c.9 0 1.6-.9 1.6-2s-.7-2-1.6-2-1.6.9-1.6 2 .7 2 1.6 2ZM12 11.5c-2.7 0-5.2 2.2-5.2 5 0 1.8 1.4 2.7 2.9 2.1.9-.3 1.5-.5 2.3-.5s1.4.2 2.3.5c1.5.6 2.9-.3 2.9-2.1 0-2.8-2.5-5-5.2-5Z" fill="currentColor"/>
          </svg>
        </span>
        绒爪洗护
      </a>
      <div className="nav-links">
        <a href="#services">服务</a>
        <a href="#process">流程</a>
        <a href="#owner">店主</a>
        <a href="#prices">价格</a>
        <a href="#reviews">口碑</a>
        <a href="#booking">门店</a>
      </div>
      <a className="nav-action" href="#booking">立即预约</a>
    </nav>
  </header>

  <main id="top">
    <section className="hero" aria-label="绒爪宠物洗护店">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">社区宠物洗护与皮毛护理</span>
          <h1>让每一次洗护，都像回家一样安心。</h1>
          <p>独立护理间、低噪吹干、温和香波和一宠一巾消毒标准，为猫咪与狗狗提供更轻松的洗护体验。</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#booking">预约到店</a>
            <a className="btn btn-secondary" href="#prices">查看套餐</a>
          </div>
        </div>
      </div>
    </section>

    <div className="hero-strip" aria-label="门店亮点">
      <div className="stat">
        <strong>12年+</strong>
        <span>资深美容师平均从业经验</span>
      </div>
      <div className="stat">
        <strong>1宠1消</strong>
        <span>浴巾、工具、护理台分宠清洁</span>
      </div>
      <div className="stat">
        <strong>30分</strong>
        <span>到店后健康状态初筛</span>
      </div>
      <div className="stat">
        <strong>4.9分</strong>
        <span>周边宠主真实评价均分</span>
      </div>
    </div>

    <section id="services">
      <div className="container">
        <div className="section-head">
          <h2>从日常清洁到造型护理，一次安排妥帖。</h2>
          <p>根据宠物体型、毛量、皮肤状态和性格选择护理方式，减少等待和不必要的刺激。</p>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <img src="https://images.unsplash.com/photo-1601758177266-bc599de87707?auto=format&fit=crop&w=900&q=82" alt="狗狗洗护护理" />
            <div className="service-body">
              <h3>犬只深层洗护</h3>
              <p>包含梳毛、洗浴、耳眼清洁、足底护理、低温吹干和基础修剪。</p>
              <div className="tag-list">
                <span className="tag">低敏香波</span>
                <span className="tag">毛结处理</span>
                <span className="tag">皮肤观察</span>
              </div>
            </div>
          </article>
          <article className="service-card">
            <img src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=82" alt="猫咪护理" />
            <div className="service-body">
              <h3>猫咪温和护理</h3>
              <p>安静独立猫区，控制接触时长，适合短毛、长毛和敏感型猫咪。</p>
              <div className="tag-list">
                <span className="tag">独立猫区</span>
                <span className="tag">少应激</span>
                <span className="tag">快速吹干</span>
              </div>
            </div>
          </article>
          <article className="service-card">
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=900&q=82" alt="宠物造型修剪" />
            <div className="service-body">
              <h3>精修造型</h3>
              <p>按品种特点和日常打理习惯设计造型，兼顾美观、透气和易维护。</p>
              <div className="tag-list">
                <span className="tag">泰迪造型</span>
                <span className="tag">局部修剪</span>
                <span className="tag">赛级线条</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="care-band" id="process">
      <div className="container process">
        <div className="process-image" role="img" aria-label="美容师为宠物进行护理"></div>
        <div>
          <div className="section-head">
            <h2>护理流程清楚可见，宠主全程放心。</h2>
          </div>
          <div className="steps">
            <article className="step">
              <div className="step-number">01</div>
              <div>
                <h3>到店评估</h3>
                <p>记录宠物年龄、体重、过敏史和当天精神状态，确认可护理项目。</p>
              </div>
            </article>
            <article className="step">
              <div className="step-number">02</div>
              <div>
                <h3>分区洗护</h3>
                <p>犬猫分区、工具消毒、按皮毛状态选择香波和护毛方案。</p>
              </div>
            </article>
            <article className="step">
              <div className="step-number">03</div>
              <div>
                <h3>低噪吹干</h3>
                <p>分阶段吹干，降低噪音和温度刺激，重点检查耳朵、脚趾和腹部。</p>
              </div>
            </article>
            <article className="step">
              <div className="step-number">04</div>
              <div>
                <h3>护理反馈</h3>
                <p>交付护理记录，提示毛结、皮屑、耳道、指甲等需要留意的情况。</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section className="owner-section" id="owner">
      <div className="container owner-profile">
        <figure className="owner-portrait">
          <img src="/assets/owner.jpg" alt="绒爪宠物洗护店主肖像" />
          <figcaption className="owner-badge">
            <div>
              <strong>谭富文</strong>
              <span>绒爪宠物洗护创始人</span>
            </div>
            <div>
              <strong>皮毛护理顾问</strong>
              <span>犬猫舒缓洗护体系倡导者</span>
            </div>
          </figcaption>
        </figure>

        <div className="owner-copy">
          <span className="eyebrow">Founder Profile</span>
          <h2>以医护般的严谨，塑造宠物洗护的华丽标准。</h2>
          <p className="owner-lead">
            谭富文先生以专业护理视角创立绒爪宠物洗护，将皮肤观察、毛发管理、情绪安抚与造型美学融为一体。店内坚持一宠一档、一客一消、护理前评估与护理后反馈，让每一次洗护都不仅是清洁，更是一次被认真对待的健康仪式。
          </p>
          <p className="owner-signature">
            “真正高级的服务，是让宠物自在，让宠主安心，让细节拥有光。”
          </p>
          <div className="owner-highlights">
            <div className="owner-highlight">
              <strong>匠心标准</strong>
              <span>以护理流程、消毒规范和皮毛状态记录，建立稳定可复购的门店体验。</span>
            </div>
            <div className="owner-highlight">
              <strong>审美造型</strong>
              <span>兼顾品种线条、日常打理难度与宠物舒适度，拒绝只为好看而牺牲体验。</span>
            </div>
            <div className="owner-highlight">
              <strong>舒缓沟通</strong>
              <span>关注宠物情绪与宠主需求，用温和节奏完成每一次洗护与交付。</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="prices">
      <div className="container">
        <div className="section-head">
          <h2>透明套餐，按体型和护理难度报价。</h2>
          <p>价格可作为预约参考；长毛、严重毛结、特殊护理会在服务前确认。</p>
        </div>
        <div className="price-grid">
          <article className="price-card">
            <h3>基础清洁</h3>
            <p>适合短毛、小体型宠物的日常洗护。</p>
            <div className="price">¥88<small> 起</small></div>
            <ul>
              <li>温和洗浴与吹干</li>
              <li>耳眼清洁</li>
              <li>指甲与足底基础护理</li>
            </ul>
          </article>
          <article className="price-card featured">
            <h3>全套护理</h3>
            <p>适合多数犬猫的月度护理选择。</p>
            <div className="price">¥168<small> 起</small></div>
            <ul>
              <li>基础清洁全部项目</li>
              <li>护毛素与毛发顺滑护理</li>
              <li>局部修剪与护理反馈</li>
            </ul>
          </article>
          <article className="price-card">
            <h3>造型精修</h3>
            <p>适合需要剪毛、造型或换季打理的宠物。</p>
            <div className="price">¥268<small> 起</small></div>
            <ul>
              <li>全套护理全部项目</li>
              <li>品种造型设计</li>
              <li>毛结拆解与皮毛管理建议</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section className="booking" id="booking">
      <div className="container booking-grid">
        <div>
          <h2>今天给它留一个舒服的位置。</h2>
          <p>提交预约后，门店会在营业时间内联系确认宠物情况和到店时段。</p>
          <div className="info-list">
            <div className="info-item">
              <span className="dot"></span>
              <span>营业时间：周一至周日 10:00-21:00</span>
            </div>
            <div className="info-item">
              <span className="dot"></span>
              <span>地址：上海市梧桐路 88 号 1 层临街店</span>
            </div>
            <div className="info-item">
              <span className="dot"></span>
              <span>电话：021-6688-2026</span>
            </div>
          </div>
        </div>

        <form className="form" id="bookingForm" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">宠主姓名</label>
            <input id="name" name="name" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="phone">联系电话</label>
            <input id="phone" name="phone" inputMode="tel" autoComplete="tel" required />
          </div>
          <div className="field">
            <label htmlFor="pet">宠物类型</label>
            <select id="pet" name="pet" required>
              <option value="">请选择</option>
              <option>小型犬</option>
              <option>中大型犬</option>
              <option>短毛猫</option>
              <option>长毛猫</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="service">预约项目</label>
            <select id="service" name="service" required>
              <option value="">请选择</option>
              <option>基础清洁</option>
              <option>全套护理</option>
              <option>造型精修</option>
              <option>皮毛专项护理</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="date">期望日期</label>
            <input id="date" name="date" type="date" min={minDate} required />
          </div>
          <div className="field">
            <label htmlFor="time">期望时段</label>
            <select id="time" name="time" required>
              <option value="">请选择</option>
              <option>10:00-12:00</option>
              <option>12:00-15:00</option>
              <option>15:00-18:00</option>
              <option>18:00-21:00</option>
            </select>
          </div>
          <div className="field full">
            <label htmlFor="note">宠物情况</label>
            <textarea id="note" name="note" placeholder="例如：怕吹风、皮肤敏感、毛结较多" />
          </div>
          <button className="btn" type="submit">提交预约</button>
          <p className="status" id="status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>

    <section id="reviews">
      <div className="container">
        <div className="section-head">
          <h2>被宠主反复选择，靠的是稳定细节。</h2>
          <p>从第一次洗护到长期护理计划，绒爪把每只宠物的习惯都认真记下来。</p>
        </div>
        <div className="reviews">
          <article className="review-card">
            <div className="review-top">
              <img className="avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="客户头像" />
              <div>
                <strong>林小姐</strong>
                <span>★★★★★</span>
              </div>
            </div>
            <p>我家比熊以前特别抗拒吹风，这里会分段安抚，洗完毛很蓬松，回家也没有焦躁。</p>
          </article>
          <article className="review-card">
            <div className="review-top">
              <img className="avatar" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="客户头像" />
              <div>
                <strong>周先生</strong>
                <span>★★★★★</span>
              </div>
            </div>
            <p>价格提前说清楚，毛结处理也会先确认，不会临时加项目。服务很踏实。</p>
          </article>
          <article className="review-card">
            <div className="review-top">
              <img className="avatar" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="客户头像" />
              <div>
                <strong>陈女士</strong>
                <span>★★★★★</span>
              </div>
            </div>
            <p>猫区很安静，美容师知道怎么抱猫和观察情绪，长毛猫洗完没有打结，值得固定来。</p>
          </article>
        </div>
      </div>
    </section>
  </main>

  <footer className="footer">
    <div className="footer-inner">
      <span>© 2026 绒爪宠物洗护 Paw & Plush Care</span>
      <span>一宠一档 · 一客一消 · 预约优先</span>
    </div>
  </footer>
    </>
  );
}
